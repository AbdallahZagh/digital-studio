import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        rounded-full p-3
        bg-[var(--brand-start)]/70
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        focus:outline-none
      "
    >
      <ArrowBigUp size={25}/>
    </button>
  );
}
