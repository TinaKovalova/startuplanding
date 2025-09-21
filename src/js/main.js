import Swiper from "swiper";
import { Pagination,Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "/src/scss/style.scss";

window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  const burgerButton = document.querySelector(".burger-button");
  const clientsScroller = document.querySelector(".clients__scroller");
  burgerButton?.addEventListener("click", () => {
    header?.classList.toggle("_active-menu");
  });

  window.addEventListener("scroll", () => {
    const headerHeigth =parseInt(getComputedStyle(header).height);
    if (window.scrollY > headerHeigth/2) {
      header.classList.add("header--blur");
    } else {
       header.classList.remove("header--blur");
    }
})

  const scrollerList = clientsScroller?.querySelector(".clients-list");
   const scrollerListContent = [...scrollerList.children];
   scrollerListContent.forEach((item) => {
     const dublicateItem = item.cloneNode(true);
     dublicateItem.setAttribute("aria-hidden", true);
     scrollerList.appendChild(dublicateItem);
   });



  const togglePriceButton = document.querySelector(".pricing-plan__toggle");

  togglePriceButton?.addEventListener("click", (e) => {
      const target = e.currentTarget;
      e.currentTarget.classList.toggle("_checked")
      target.classList.contains("_checked")?target.setAttribute("data-checked", true):target.setAttribute("data-checked", false)
  })

  const swiper = new Swiper(".offers__swiper.swiper", {
    speed: 2000,
    loop: true,
    modules: [Pagination, Autoplay, EffectFade],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return index < 3 ? `<span class="${className}"></span>` : "";
      },
    },
  });
});
