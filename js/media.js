var btn = document.querySelector('.section-contacts__btn');

  var mql = window.matchMedia('(max-width: 576px)');

  function changeFontStyleMobile(e) {
    if (e.matches) {
      /* the viewport is 600 pixels wide or less */
      btn.textContent = 'Заказать';

    } else {
      /* the viewport is more than than 600 pixels wide */
      btn.textContent = 'Заказать обратный звонок';
    }
  }

  changeFontStyleMobile(mql);
  mql.addEventListener('change', changeFontStyleMobile, false);

  mql.onchange = function() {
    console.log(mql);
  }