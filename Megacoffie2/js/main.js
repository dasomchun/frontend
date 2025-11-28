// 메인섹션 슬라이드 스크립트
document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides.main-container");
  const slides = document.querySelectorAll(".slide");
  const navButtons = document.querySelectorAll("#float_div button");

  const transitionDuration = "0.3s";
  const transitionTiming = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  let slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
  const totalSlides = slides.length;

  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let currentIndex = 0;

  function showSlide(index) {
    let newIndex = index;

    if (newIndex >= totalSlides) {
      newIndex = totalSlides - 1;
    } else if (newIndex < 0) {
      newIndex = 0;
    }

    if (currentIndex === newIndex) {
      slidesContainer.style.transition = `transform ${transitionDuration} ${transitionTiming}`;
      currentTranslate = -currentIndex * slideWidth;
      slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
      prevTranslate = currentTranslate;
      return;
    }

    currentIndex = newIndex;

    slidesContainer.style.transition = `transform ${transitionDuration} ${transitionTiming}`;
    currentTranslate = -currentIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;

    navButtons.forEach((button, i) => {
      button.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  slidesContainer.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.clientX;
    slidesContainer.style.transition = "none";
    slidesContainer.style.cursor = "grabbing";
  });

  slidesContainer.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const currentX = event.clientX;
    const distanceX = currentX - startX;

    let newTranslate = prevTranslate + distanceX;

    const maxTranslate = 0;
    const minTranslate = -(totalSlides - 1) * slideWidth;

    if (newTranslate > maxTranslate) {
      newTranslate = maxTranslate;
    } else if (newTranslate < minTranslate) {
      newTranslate = minTranslate;
    }

    slidesContainer.style.transform = `translateX(${newTranslate}px)`;

    const threshold = slideWidth * 0.05;
    const movedBy = currentX - startX;

    if (movedBy < -threshold) {
      nextSlide();
      isDragging = false;
    } else if (movedBy > threshold) {
      prevSlide();
      isDragging = false;
    }
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    slidesContainer.style.cursor = "grab";

    showSlide(currentIndex);
  };

  window.addEventListener("mouseup", endDrag);
  slidesContainer.addEventListener("mouseleave", endDrag);

  navButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
      showSlide(i);
    });
  });

  showSlide(currentIndex);

  window.addEventListener("resize", () => {
    slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
    showSlide(currentIndex);
  });
});
// 메뉴 슬라이드 스크립트

document.addEventListener("DOMContentLoaded", () => {
  const menuslidesContainer = document.querySelector(
    ".menuslides-viewport .menuslides"
  );

  const slides = Array.from(
    document.querySelectorAll(".menuslides-viewport .menuslide")
  );
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const transitionDuration = "0.5s";
  const transitionTiming = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  if (!menuslidesContainer || slides.length === 0 || !prevBtn || !nextBtn) {
    console.error("슬라이더에 필요한 요소가 HTML에서 발견되지 않았습니다.");
    return;
  }

  const totalSlides = slides.length;
  let currentIndex = 0;

  let slideStepWidth = 0;
  let minTranslate = 0;

  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  function updateDimensions() {
    slideStepWidth = slides[0].offsetWidth + 15;

    menuslidesContainer.style.width = `${totalSlides * slideStepWidth}px`;

    minTranslate = -(totalSlides - 1) * slideStepWidth;
  }

  function goToSlide(index) {
    let newIndex = index;

    if (newIndex >= totalSlides) {
      newIndex = totalSlides - 1;
    } else if (newIndex < 0) {
      newIndex = 0;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === newIndex);
    });

    if (currentIndex === newIndex) {
      menuslidesContainer.style.transition = `transform ${transitionDuration} ${transitionTiming}`;
      currentTranslate = -currentIndex * slideStepWidth;
      menuslidesContainer.style.transform = `translateX(${currentTranslate}px)`;
      prevTranslate = currentTranslate;
      return;
    }

    currentIndex = newIndex;

    menuslidesContainer.style.transition = `transform ${transitionDuration} ${transitionTiming}`;
    currentTranslate = -currentIndex * slideStepWidth;
    menuslidesContainer.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;
  }

  menuslidesContainer.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isDragging = true;
    startX = event.clientX;
    menuslidesContainer.style.transition = "none";
    menuslidesContainer.style.cursor = "grabbing";
  });

  menuslidesContainer.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    event.preventDefault();

    const currentX = event.clientX;
    const distanceX = currentX - startX;

    let newTranslate = prevTranslate + distanceX;

    const maxTranslate = 0;

    if (newTranslate > maxTranslate) {
      const overshoot = newTranslate - maxTranslate;
      newTranslate = maxTranslate + overshoot / 3;
    } else if (newTranslate < minTranslate) {
      const overshoot = minTranslate - newTranslate;
      newTranslate = minTranslate - overshoot / 3;
    }

    menuslidesContainer.style.transform = `translateX(${newTranslate}px)`;

    const threshold = slideStepWidth * 0.05;
    const movedBy = currentX - startX;

    if (
      !(
        (currentIndex === 0 && movedBy > 0) ||
        (currentIndex === totalSlides - 1 && movedBy < 0)
      )
    ) {
      if (movedBy < -threshold) {
        goToSlide(currentIndex + 1);
        isDragging = false;
      } else if (movedBy > threshold) {
        goToSlide(currentIndex - 1);
        isDragging = false;
      }
    }
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    menuslidesContainer.style.cursor = "grab";

    goToSlide(currentIndex);
  };

  window.addEventListener("mouseup", endDrag);
  menuslidesContainer.addEventListener("mouseleave", endDrag);

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  updateDimensions();
  goToSlide(currentIndex);

  window.addEventListener("resize", () => {
    updateDimensions();
    goToSlide(currentIndex);
  });
});
// 스크롤 스크립트

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const totalSections = sections.length;
  let currentSectionIndex = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index < 0 || index >= totalSections) {
      return;
    }

    isScrolling = true;
    currentSectionIndex = index;

    const targetScrollTop = sections[index].offsetTop;

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  window.addEventListener(
    "wheel",
    function (event) {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;

      let nextIndex = currentSectionIndex + direction;

      scrollToSection(nextIndex);
    },
    { passive: false }
  );

  function initializeCurrentSection() {
    let minDistance = Infinity;
    sections.forEach((section, index) => {
      const distance = Math.abs(window.scrollY - section.offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        currentSectionIndex = index;
      }
    });
  }

  initializeCurrentSection();
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".menu-text, .franchise-intro"
  );
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  animatedElements.forEach((element) => {
    if (element) {
      observer.observe(element);
    }
  });

  const sections = document.querySelectorAll(".section");
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".left_float a");
  const sectionElements = [];

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElements.push({ id: sectionId, element: sectionElement });
      }
    }
  });

  function updateActiveSection() {
    let activeId = "";
    let maxVisibleHeight = -1;

    sectionElements.forEach((section) => {
      const rect = section.element.getBoundingClientRect();

      const viewPortTop = 0;
      const viewPortBottom = window.innerHeight;

      const visibleStart = Math.max(rect.top, viewPortTop);
      const visibleEnd = Math.min(rect.bottom, viewPortBottom);

      const visibleHeight = visibleEnd - visibleStart;

      if (visibleHeight > 10 && visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href");

      if (linkHref === "#" + activeId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // 스크롤이 맨 위에 있을 때 첫 번째 섹션 강제 활성화
    if (window.scrollY === 0 && sectionElements.length > 0) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const firstLink = document.querySelector(
        `.left_float a[href="#${sectionElements[0].id}"]`
      );
      if (firstLink) {
        firstLink.classList.add("active");
      }
    }
  }

  // 초기 로딩 시 및 스크롤, 리사이즈 시 함수 실행
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);

  // 클릭 시 부드러운 스크롤 적용 및 활성 상태 즉시 변경
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // 클릭한 링크를 즉시 활성화
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");

          // 부드러운 스크롤 실행 (0 offset)
          const targetPosition = targetElement.offsetTop;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
