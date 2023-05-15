window.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
      autoplay: {
          delay: 2500,
      }
  });

  const redirectForOtherPage = document.querySelector('.button-start')
  redirectForOtherPage.addEventListener('click', () => {
    window.location.href = "../pages/emptyList.html";
  })
})