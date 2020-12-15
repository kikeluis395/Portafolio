// const btn_menu = document.querySelector('.fa-bars')
//   if(btn_menu){
//     btn_menu.addEventListener('click' , () => {
//       const menu_items = document.querySelector('.menu_items')
//       menu_items.classList.toggle('show')
//     })
//   }
$(document).ready(function () {
  function mostrarMenu() {

    $('.menu_items').toggleClass('show');

  }

  $('.fa-bars').click(mostrarMenu);

    function desvanecer() {

      $('.menu_items').toggleClass('show');

    }

    $('.menu_items li a').click(desvanecer);

})