import { useEffect } from "react";

export default function StaffNoIndex() {
  useEffect(() => {
    let el = document.head.querySelector('meta[name="robots"]');
    const created = !el;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "robots");
      document.head.appendChild(el);
    }
    const prev = el.getAttribute("content") ?? "";
    el.setAttribute("content", "noindex, nofollow");

    return () => {
      if (created) {
        el.remove();
      } else if (prev) {
        el.setAttribute("content", prev);
      }
    };
  }, []);

  return null;
}
