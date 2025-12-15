import { useEffect } from "react";
import $ from "jquery";

export function useJquerySmoothScroll() {
  useEffect(() => {
    // Smooth scrolling ONLY for links that start with "#"
    $('a[href^="#"]').on("click", function (e) {
      const target = $(this).attr("href");

      // If link is "#" or empty, do nothing
      if (!target || target === "#") return;

      const targetEl = $(target);

      if (targetEl.length === 0) return;

      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: targetEl.offset().top - 80, // adjust for navbar height
        },
        600, // smooth time
        "swing"
      );
    });

    return () => {
      $('a[href^="#"]').off("click");
    };
  }, []);
}
