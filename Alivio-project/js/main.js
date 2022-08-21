// Mobile
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button_icon");
const mobileNav = document.querySelector(".mobile-nav");
console.log(mobileNavButton);
mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Video
const videoBtn = document.querySelector(".story-video-btn");
const VideoOverlay = document.querySelector(".story-video-overlay");
const videoBtnIcon = document.getElementById("video-story-btn-icon");
const videoFile = document.getElementById("video-story");

videoBtn.addEventListener("click", function () {
  function toggleOverlay(event) {
    if (event.type === "mouseleave") {
      VideoOverlay.classList.add("hidden");
    } else {
      VideoOverlay.classList.remove("hidden");
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = "./img/story/pause-white.svg";
    VideoOverlay.onmouseleave = toggleOverlay;
    VideoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnIcon.src = "./img/story/play-white.svg";
    VideoOverlay.onmouseleave = null;
    VideoOverlay.onmouseenter = null;
  }
});
