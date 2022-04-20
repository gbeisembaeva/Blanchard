$( function() {
  $( ".accordion-list" ).accordion({
     icons: false,
     heightStyle: "content",
   });
    document.querySelectorAll(".heading-item__btn").forEach(item => {
      item.addEventListener("click", function(e) {
        $( ".accordion-list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });
        let path = e.currentTarget.dataset.path;
        document.querySelectorAll(".tab-content").forEach(el => {
          el.classList.remove("tab-active");
        });
        document.querySelectorAll(".heading-item__btn").forEach(el => {
          el.classList.remove("btn-active");
        });
        document.querySelector(`[data-target='${path}']`).classList.add("tab-active")
        this.classList.add("btn-active");
      })
    })
   
    document.querySelectorAll(".tab-content").forEach(item => {
      // let btns = item.find(".ac--list__iten-tab");
      let btns = item.querySelectorAll(".accordion-list__iten-tab");
      let articles = item.querySelectorAll(".article-content");
      btns.forEach(el => {
        el.addEventListener("click",function(e) {
          let path = e.currentTarget.dataset.path;
          let tabCont = item.querySelector(`[data-target='${path}']`);
          console.log(tabCont)
          articles.forEach(el => {
            el.classList.remove("article-tabActive")
          })
          btns.forEach(el => {
            el.classList.remove("article-btn-active")
          })
          tabCont.classList.add("article-tabActive")
          this.classList.add("article-btn-active");
        })
      })
      
    })
 } );