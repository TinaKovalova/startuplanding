import Swiper from "swiper";
import { Pagination,Autoplay } from "swiper/modules";
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
    const headerHeigth = parseInt(getComputedStyle(header).height);
    if (window.scrollY > headerHeigth / 2) {
      header.classList.add("header--blur");
    } else {
      header.classList.remove("header--blur");
    }
  });

  //---Scrolller-----------------------
  const clientsScroller = document.querySelector(".clients__scroller");
  const scrollerList = clientsScroller?.querySelector(".clients-list");
  const scrollerListContent = [...scrollerList.children];
  let counter = Math.ceil(
    (clientsScroller.scrollWidth * 2) / scrollerList.scrollWidth
  );
  if (counter % 2 === 0) counter--;

  while (counter > 0) {
    scrollerListContent.forEach((item) => {
      const dublicateItem = item.cloneNode(true);
      dublicateItem.setAttribute("aria-hidden", true);
      scrollerList.appendChild(dublicateItem);
    });
    counter--;
  }
  //---Scrolller animation settings-----------------------
  const totalWidth = scrollerList.scrollWidth / 2;
  const animationSpeed = scrollerList.dataset.speed || 60;
  const duration = Math.floor(totalWidth / animationSpeed);
  scrollerList.style.animationDuration = `${duration}s`;

  const togglePriceButton = document.querySelector(".pricing-plan__toggle");
  togglePriceButton?.addEventListener("click", (e) => {
    const target = e.currentTarget;
    e.currentTarget.classList.toggle("_checked");
    target.classList.contains("_checked")
      ? target.setAttribute("data-checked", true)
      : target.setAttribute("data-checked", false);
  });

  //---Swiper-----------------------
  const offersSwiperElement = document.querySelector(".offers__swiper.swiper");
  const progressCircle = offersSwiperElement.querySelector(".progres-label__image");
  const currentSlideTitle = offersSwiperElement.querySelector(".progres-label__title");
  const currentSlideLocation = offersSwiperElement.querySelector(".progres-label__location");
  const offersSwiper = new Swiper(".offers__swiper.swiper", {
    speed: 3000,
    loop: true,
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return index < 3 ? `<span class="${className}"></span>` : "";
      },
    },
    on: {
      autoplayTimeLeft(swiper, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
      },

      slideChange(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const currentTitle = activeSlide.querySelector(".offer-slide__title");
        const currentLocation = activeSlide.querySelector(
          ".offer-slide__location"
        );
        if (currentSlideTitle)
          currentSlideTitle.textContent = currentTitle?.textContent;
        if (currentSlideLocation)
          currentSlideLocation.textContent = currentLocation?.textContent;
      },
    },
  });


  //---observer---------------------
  const mainOptions = { threshold: 0.8 };
  const cardsOptions = { threshold: 0.3 };
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("_animated");
        observer.unobserve(entry.target);
      }
    })
  }
  const mainObserver = new IntersectionObserver(onEntry, mainOptions);
  const cardsObserver = new IntersectionObserver(onEntry, cardsOptions);

  const animationTargetElements = document.querySelectorAll(
    ".block-header, .section-header,.working-space__button, .pricing-plan__toggle"
  );

  if (animationTargetElements.length > 0) {
    animationTargetElements.forEach((targetElement) =>
      mainObserver.observe(targetElement)
    );
  }
    const animationTargetCards = document.querySelectorAll(".pricing-plan__card,.working-space__gallery-item");
  if (animationTargetCards.length > 0) {
    animationTargetCards.forEach((card) => cardsObserver.observe(card));
  }
  const posts = document.querySelectorAll(".post");
  if (posts.length > 0) {
    posts.forEach((card, index) => {
      card.style.transitionDelay = `${index * 300 / 1000}s`
      cardsObserver.observe(card);
    } )
  }

});

