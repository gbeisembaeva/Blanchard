//Дропдаун
document.querySelectorAll(".section-header__dropdown-simplebar").forEach(element => {
  new SimpleBar(element, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
})

document.querySelectorAll(".is-active").forEach(menuElement => {
  new SimpleBar(menuElement, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
})

document.querySelectorAll(".section-header__bottom-link").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".section-header__dropdown");
    
    document.querySelectorAll(".section-header__bottom-link").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".section-header__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".section-header__bottom-list")) {
    document.querySelectorAll(".section-header__dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".section-header__bottom-link").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})

  //Select
  const element = document.querySelector('#selectCustom')
  const choices = new Choices(element, {
    searchEnabled: false,
    duplicateItemsAllowed : true ,
    shouldSort: false,
    itemSelectText: '',
  });

//Валидация
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат'
    },
  }
});


/*Карта*/
// Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init() {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.758176, 37.638649],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 14
            });

            var myPlacemark = new ymaps.Placemark([55.758203, 37.600937], {}, {
              iconLayout: 'default#image',
              iconImageHref: 'img/map_icon.svg',
              iconImageSize: [28, 40],
              iconImageOffset: [-3, -42]
          });
          myMap.geoObjects.add(myPlacemark);
        }
        