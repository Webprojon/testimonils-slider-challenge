"use strict";
window.addEventListener("DOMContentLoaded", function () {
  //   Static Data
  const user = [
    {
      name: "Tanya Sinclair",
      job: "UX Engineer",
      quote:
        "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my sdreams and so excited about the future. ”",
      userImg: "./assets/images/image-tanya.jpg",
    },
    {
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
      quote:
        "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      userImg: "./assets/images/image-john.jpg",
    },
  ];

  // Selectors
  const userQuote = document.querySelector(".user-quote");
  const userName = document.querySelector(".user-name");
  const userJob = document.querySelector(".user-job");
  const userAvatar = document.querySelector(".user-avatar");
  const textContainer = document.querySelector(".quote");
  const imgContainer = document.querySelector(".image");
  const prev = document.querySelector(".prev-icon");
  const next = document.querySelector(".next-icon");

  // Functions & Events
  let currentIndex = 0;
  next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % user.length;
    updateSlider();
  });

  prev.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + user.length) % user.length;
    updateSlider();
  });

  function updateSlider() {
    const currentSlide = user[currentIndex];

    imgContainer.style.animation = "disappearToLeft 0.5s ease-in-out";
    textContainer.style.animation = "disappearToLeft 0.5s ease-in-out";

    setTimeout(() => {
      userQuote.textContent = currentSlide.quote;
      userName.textContent = currentSlide.name;
      userJob.textContent = currentSlide.job;
      userAvatar.src = currentSlide.userImg;

      imgContainer.style.animation = "appearFromRight 0.5s ease-in-out";
      textContainer.style.animation = "appearFromRight 0.5s ease-in-out";
    }, 100);
  }

  updateSlider();
});
