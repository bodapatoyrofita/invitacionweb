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

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("#regalo-left");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animacion-regalo");
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

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("#regalo-right");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animacion-regalo");
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

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".pato-swing");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("swing-in-top-fwd");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.75,
    }
  );

  elements.forEach(el => observer.observe(el));
});