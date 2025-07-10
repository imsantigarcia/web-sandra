
  document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces que apuntan a un id (anclas internas)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
