  const textoH1 = "Hola, soy Sandra Pàmies";
  const textoP = "Psicóloga y Gerontóloga Social";
  const velocidad = 50; // milisegundos por letra

  const h1 = document.querySelector('.h1');
  const p = document.querySelector('.p');

  let i = 0;
  let j = 0;

  function escribirH1() {
    if (i < textoH1.length) {
      h1.innerHTML += textoH1.charAt(i);
      i++;
      setTimeout(escribirH1, velocidad);
    } else {
      setTimeout(escribirP, 500); // espera medio segundo antes de empezar el párrafo
    }
  }

  function escribirP() {
    if (j < textoP.length) {
      p.innerHTML += textoP.charAt(j);
      j++;
      setTimeout(escribirP, velocidad);
    }
  }

  escribirH1(); // Inicia el efecto