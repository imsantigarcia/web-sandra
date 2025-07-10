const swiper = new Swiper('.swiper', {
  loop: true,                     // permite que el carrusel sea infinito
  spaceBetween: 30,              // separa 30px entre slides (aún así no se asoma si solo hay 1 visible)
  slidesPerView: 1,              // SOLO una slide visible a la vez → no se asoma nada
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});
