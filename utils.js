document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cd-is-visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.2 // 20% visible before triggering
    }
  );

  elements.forEach(el => observer.observe(el));
});
