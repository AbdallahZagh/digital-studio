import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "../../animations/gsapConfig";

export function HeroWaterSphere() {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* =====================
       Scene & Camera
    ===================== */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    /* =====================
       Geometry (optimized)
    ===================== */
    const geometry = new THREE.SphereGeometry(
      1.4,
      isMobile ? 64 : 96,
      isMobile ? 64 : 96
    );

    const posAttr = geometry.attributes.position;
    const basePositions = posAttr.array.slice();

    /* =====================
       Material (liquid glass)
    ===================== */
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ff6b35"),
      transmission: 1,
      roughness: 0.08,
      metalness: 0,
      ior: 1.33,
      thickness: 1.4,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.scale.set(0, 0, 0);
    scene.add(sphere);

    /* =====================
       Lights (SAFE)
    ===================== */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const warmLight = new THREE.PointLight(0xff6b35, 1.4);
    warmLight.position.set(4, 3, 6);
    scene.add(warmLight);

    const pinkLight = new THREE.PointLight(0xff3e88, 1.2);
    pinkLight.position.set(-4, -3, 6);
    scene.add(pinkLight);

    /* =====================
       GSAP Intro
    ===================== */
    if (!prefersReduced) {
      gsap.to(sphere.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.6,
        ease: "power3.out",
        delay: 0.2,
      });
    } else {
      sphere.scale.set(1, 1, 1);
    }

    /* =====================
       Mouse Follow (desktop)
    ===================== */
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    /* =====================
       Lava Lamp Motion
    ===================== */
    let t = 0;

    const animate = () => {
      t += 0.02;

      if (!prefersReduced) {
        for (let i = 0; i < posAttr.count; i++) {
          const i3 = i * 3;
          const ox = basePositions[i3];
          const oy = basePositions[i3 + 1];
          const oz = basePositions[i3 + 2];

          posAttr.array[i3]     = ox + Math.sin(t + oy * 3) * 0.05;
          posAttr.array[i3 + 1] = oy + Math.sin(t + ox * 3) * 0.05;
          posAttr.array[i3 + 2] = oz + Math.sin(t + ox * 2 + oy * 2) * 0.05;
        }
        posAttr.needsUpdate = true;
      }

      sphere.rotation.y += 0.002;
      sphere.position.x += (mouseX - sphere.position.x) * 0.04;
      sphere.position.y += (-mouseY - sphere.position.y) * 0.04;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    /* =====================
       Resize
    ===================== */
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", onResize);

    /* =====================
       Cleanup
    ===================== */
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px]
        sm:w-[550px] sm:h-[550px]
        md:w-[750px] md:h-[750px]
        z-[2]
        pointer-events-none
      "
    />
  );
}
