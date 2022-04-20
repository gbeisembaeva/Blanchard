//бургер меню
window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#menu').classList.toggle('is-active')
    })
  
    document.querySelector('.section-header__burger').addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('section-header__burger--active');
      document.body.classList.toggle('open-menu');
      document.querySelectorAll('.section-header__btn').forEach(function(Button) {
        Button.classList.toggle('btn-menu')
      })
    });
  });
  
  function open() {
    document.getElementById("burger").style.display = "block";
  }
  
  function close() {
    document.getElementById("burger").style.display = "none";
  }




  //Поиск по сайту
  const btnSearch = document.querySelector('.section-header__btn-search')
  const btnClose = document.querySelector('.search-form__close')
  const searchForm = document.querySelector('.search-form')

   btnSearch.addEventListener('click', () => {
    setTimeout(() => {
      searchForm.classList.add('search-form--visible');
    }, 300);
  });

  btnClose.addEventListener('click', () => {
    searchForm.classList.remove('search-form--visible');
    setTimeout(() => {
      searchForm.reset();
    }, 300); 
  }); 