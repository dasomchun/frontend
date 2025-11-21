document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides.main-container");
  const slides = document.querySelectorAll(".slide");
  const navButtons = document.querySelectorAll("#float_div button");

  const slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;

  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slidesContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;

    navButtons.forEach((button, i) => {
      if (i === currentIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  navButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      showSlide(i);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // ⬇️ 여기를 수정합니다. 마지막 마침표를 제거했습니다.
  const menuslidesContainer = document.querySelector(
    ".menuslides-viewport .menuslides" // ✅ 수정 완료!
  );

  const slides = Array.from(
    document.querySelectorAll(".menuslides-viewport .menuslide")
  );
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!menuslidesContainer || slides.length === 0 || !prevBtn || !nextBtn) {
    console.error("슬라이더에 필요한 요소가 HTML에서 발견되지 않았습니다.");
  } else {
    const slideStepWidth = slides[0].offsetWidth + 15;
    const totalSlides = slides.length;
    let currentIndex = 0;

    menuslidesContainer.style.width = `${totalSlides * slideStepWidth}px`;

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = 0;
      } else if (index >= totalSlides) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex = index;
      }

      currentTranslate = -currentIndex * slideStepWidth;
      menuslidesContainer.style.transform = `translateX(${currentTranslate}px)`;

      slides.forEach((slide, i) => {
        slide.classList.remove("active");
      });
      if (slides[currentIndex]) {
        slides[currentIndex].classList.add("active");
      }
    }

    goToSlide(currentIndex);

    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });
  }
  const menuText = document.querySelector(".menu-text");

  if (menuText) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(menuText);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuText = document.querySelector(".franchise-intro");

  if (menuText) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    function observerCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(menuText);
  }
});
