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

  window.addEventListener("scroll", () => {
    const headerHeigth =parseInt(getComputedStyle(header).height);
    if (window.scrollY > headerHeigth/2) {
      header.classList.add("header--blur");
    } else {
       header.classList.remove("header--blur");
    }
  })
  

  const clientsScroller = document.querySelector(".clients__scroller");
  const scrollerList = clientsScroller?.querySelector(".clients-list");

//   const clientsScrollerWidth = parseInt(getComputedStyle(clientsScroller).width);
//     const scrollerListWidth = parseInt(getComputedStyle(scrollerList).width);
// console.log(clientsScrollerWidth / scrollerListWidth);

  const scrollerListContent = [...scrollerList.children];
  scrollerListContent.forEach((item) => {
    const dublicateItem = item.cloneNode(true);
    dublicateItem.setAttribute("aria-hidden", true);
    scrollerList.appendChild(dublicateItem);
  });
  scrollerList.classList.add("clients-list--run");
    // if (scrollerListWidth <= clientsScrollerWidth) {
    //   console.log("yes");
    //   let i = Math.ceil((clientsScrollerWidth * 2) / scrollerListWidth);
    //   // console.log("--i", i)
    //   do {
    //     scrollerListContent.forEach((item) => {
    //       const dublicateItem = item.cloneNode(true);
    //       dublicateItem.setAttribute("aria-hidden", true);
    //       scrollerList.appendChild(dublicateItem);
    //     });
    //     console.log("--i", i);
    //     --i;
    //   }while (i > 0) 
    
   
    //   scrollerList.classList.add("clients-list--run");
    // } else {
    //   console.log("not");
    // }

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
