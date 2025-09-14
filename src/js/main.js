import Swiper from "swiper";
import { Pagination,Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "/src/scss/style.scss";

window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  const burgerButton = document.querySelector(".burger-button");
  burgerButton?.addEventListener("click", () => {
    header?.classList.toggle("_active-menu");
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
