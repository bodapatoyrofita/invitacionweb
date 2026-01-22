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
      threshold: 0.2,
    }
  );

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("#los-tilos");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scale-in-center");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("#mapa-img");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scale-in-center");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  elements.forEach(el => observer.observe(el));
});



  const imageH = document.getElementById("hombre-baila");
  const imageM = document.getElementById("mujer-baila");
  
  let clicksH = 0;
  let clicksM = 0;

  imageH.addEventListener("click", () => {
    clicksH++;

    if (clicksH % 6 === 0 & clicksM % 6 === 0 & clicksH != 0 & clicksM != 0) {
      showGifPopup();
    }
  });

  imageM.addEventListener("click", () => {
    clicksM++;

    if (clicksH % 6 === 0 & clicksM % 6 === 0 & clicksH != 0 & clicksM != 0) {
      showGifPopup();
    }
  });

  const popup = document.getElementById("gif-popup");
  const gif = popup.querySelector("img");

  function showGifPopup() {
    popup.style.display = "flex";

    const src = gif.src;
    gif.src = "";
    gif.src = src;

    setTimeout(() => {
      popup.style.display = "none";
    }, 2000); // ⬅ ajustá a la duración real del GIF
  }
