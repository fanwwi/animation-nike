document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const logoContainer = document.querySelector(".logo-container");
  const splashes = document.querySelectorAll(".splash");

  // Показываем логотип и фон с анимацией
  setTimeout(() => {
    background.classList.add("hide");
    logoContainer.classList.add("show");
  }, 1000);

  // Убираем анимацию после окончания анимации
  setTimeout(() => {
    background.classList.add("no-animation");
    logoContainer.classList.add("no-animation");
  }, 3000);

  // Показываем брызги
  splashes.forEach((splash, index) => {
    setTimeout(() => {
      splash.classList.add("no-animation");
      splash.style.opacity = "1";
    }, 1000 + index * 500); // Показываем с задержкой
  });
});
