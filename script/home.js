$(".nav-link resume").click(function () {
  const link = document.createElement("a");
  const mypdf = "./Media/mypdf.pdf";
  link.href = mypdf;
  link.download = mypdf;
  link.click();
  const newWindow = window.open(mypdf, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null;
  }
});

$("#linkedin").click(function () {
  const link = "https://www.linkedin.com/in/vaishnavir31/";
  window.open(link, "_blank");
});
$("#github").click(function () {
  const link = "https://github.com/VaishnaviR99";
  window.open(link, "_blank");
});

$("#mail").click(function () {
  const recipient = "ralegaonkarvaishnavi@gmail.com";
  window.location.href = `mailto:${recipient}`;
});

$("#call").click(function () {
  const phoneNumber = "8788824031";
  window.location.href = `tel:${phoneNumber}`;
  window.open(`tel:${phoneNumber}`);
});

const dynamicText = document.querySelector("#typedText");
const words = [
  "MERN Stack Developer !",
  "Full-Stack Developer !",
  "Front-End Developer !",
  "Back-End Developer !",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

$(document).ready(function () {
  $(".menu-item").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});



typeEffect();
