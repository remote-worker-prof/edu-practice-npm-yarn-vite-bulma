// Точка входа JS.
// Здесь мы подключаем стили и добавляем небольшую логику интерфейса.
// В проекте нет фреймворков — только нативный браузерный JavaScript.
import "./styles/main.scss";

// Автоматически подставляем текущий год в футер.
// Ищем элемент с атрибутом data-year, чтобы не менять разметку вручную каждый год.
const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  // Явно приводим к строке, чтобы записать текстовый контент.
  yearEl.textContent = String(new Date().getFullYear());
}

// Мобильное меню Bulma требует переключения класса is-active.
// В Bulma бургер‑кнопка и меню должны одновременно получать этот класс.
const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector("#mainNav");
if (burger && menu) {
  burger.addEventListener("click", () => {
    // Переключаем состояние кнопки и меню синхронно.
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
}

// Простой скролл‑рефил для карточек и блоков.
// Используем IntersectionObserver — он сообщает, когда элемент попал в видимую область.
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Класс is-visible запускает CSS‑анимацию (см. стили).
        entry.target.classList.add("is-visible");
        // После первого появления элемент больше не отслеживаем — экономим ресурсы.
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    // 0.2 означает, что 20% элемента должны быть в зоне видимости.
    // Увеличьте значение, если хотите позже запускать анимацию.
    threshold: 0.2
  }
);

// Подключаем наблюдатель ко всем элементам с классом .reveal.
revealItems.forEach((item) => revealObserver.observe(item));

// Снимаем "preload" после полной загрузки, чтобы проявить анимации.
// Это предотвращает резкие скачки при первой отрисовке.
window.addEventListener("load", () => {
  document.body.classList.remove("is-preload");
});
