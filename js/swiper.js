//swiper hero
const heroSwiper = new Swiper('.swiper-hero', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    enabled: true,
  },
  effect: 'fade'
});

//swiper gallery
const gallerySlider = new Swiper(".section-gallery__right-content", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  pagination: {
    el: ".section-gallery__pagination-right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".section-gallery__btn-next",
    prevEl: ".section-gallery__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 38,
    },
    1200: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

});


//swiper издания
const editionsSlider = new Swiper(".section-editions__right-content", {
  slidesPerView: 3,
  //slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: ".section-editions__pagination-right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".section-editions__btn-next",
    prevEl: ".section-editions__btn-prev"
  },

  /*breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },*/

  a11y: false
});

//swiper пертнеры проектов
const projectSlider = new Swiper(".swiper-projects", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".section-projects__btn-next",
    prevEl: ".section-projects__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
    },
    576: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 34,
    },
    1200: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

});

//swiper События
const eventSlider = new Swiper(".swiper-event", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".section-event__btn-next",
    prevEl: ".section-event__btn-prev"
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 27,
    },
    768: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 27,
    },
    1200: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
    },
    1380: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
    }

  },

  a11y: false

});