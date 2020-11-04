/* Slider */

const sliderLinks = document.querySelectorAll(".slider-controls-btn");
const sliderSlides = document.querySelectorAll(".slider-item");
const siteWrapper = document.querySelector(".site-wrapper");

for (let i = 0; i < sliderLinks.length; i++) {
  sliderLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let j = 0; j < sliderSlides.length; j++) {
      sliderLinks[j].classList.remove("current-slider-btn");
      sliderSlides[j].classList.remove("slide-current");
      sliderLinks[j].disabled = false;
      siteWrapper.classList.remove("site-wrapper-" + (j + 1));
    }
    sliderSlides[i].classList.add("slide-current");
    sliderLinks[i].classList.add("current-slider-btn");
    sliderLinks[i].disabled = true;
    siteWrapper.classList.add("site-wrapper-" + (i + 1));
  })
}

/* Modal - Feedback */

const overlay = document.querySelector(".overlay-modal-feedback");
const feedbackLink = document.querySelector(".contacts-feedback-btn");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackForm = feedbackPopup.querySelector("form");
const feedbackName = feedbackPopup.querySelector("#feedback-input-name");
const feedbackEmail = feedbackPopup.querySelector("#feedback-input-email");
const feedbackLetter = feedbackPopup.querySelector("textarea");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay-modal-show");
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
})

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
})

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  overlay.classList.remove("overlay-modal-show");
  feedbackPopup.classList.remove("modal-error");
})

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      overlay.classList.remove("overlay-modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
})
