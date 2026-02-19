# Практическая работа № 2: сборка сайта‑портфолио

**Тема:** Node.js, npm или yarn, Vite, Sass, Bulma (с упоминанием Webpack как альтернативы).

**Формат:** конспект‑лекция + пошаговая практика.

**Версия:** 1.1

**Актуально на:** 2026‑02‑19

---

## Документы и гайды

Этот файл — основной лонг‑рид для лекции и практики. Подробные объяснения конкретных инструментов вынесены в гайды, чтобы не дублировать материал и не разводить версии.

Документы для участников занятия:
- `./LESSON_PLAN.md` — план занятия.
- `./REPORT.md` — шаблон отчета.
- `./WEBPACK_NOTES.md` — короткая заметка‑ссылка на гайд по Webpack.
- `./screens/` — папка для скриншотов.

Гайды по технологиям (единственный источник подробных объяснений инструментов):
- `./guides/nodejs.md`
- `./guides/npm.md`
- `./guides/yarn.md`
- `./guides/vite.md`
- `./guides/sass.md`
- `./guides/bulma.md`
- `./guides/webpack.md`
- `./guides/workflow.md`

---

## 1. Введение

Занятие удобно начать с простой идеи: современная фронтенд‑разработка держится на инструментах сборки. Они решают три базовые задачи — поставить зависимости, собрать проект для продакшена и сделать разработку быстрой за счет dev‑сервера. Эта практика демонстрирует, как эти задачи складываются в единый рабочий конвейер и почему порядок уровней важен.

Мы используем сбалансированный стек по слоям: сначала среда выполнения (Node.js), затем менеджер пакетов (npm или yarn), затем сборщик и dev‑сервер (Vite), далее препроцессор (Sass), и сверху — UI‑фреймворк (Bulma). Webpack упоминаем как альтернативу и исторический ориентир. Ключевая идея практики — собрать сайт‑портфолио и увидеть, как Sass‑переменные меняют весь визуальный стиль Bulma.

---

## 2. Цели и результаты обучения

Цель — не просто «запустить проект», а понять связь между уровнями стека и научиться управлять дизайном через переменные. В конце занятия участник должен уметь объяснить, где и зачем используется каждый слой, а также показать работающий результат.

Ожидаемые результаты: готовый сайт‑портфолио с кастомным дизайном, корректная сборка и отчет с описанием шагов и скриншотами.

---

## 3. Формат работы и артефакты

Практика строится как короткий теоретический разбор и последовательное выполнение шагов. Лектор может читать этот текст как сценарий занятия, а участники — как инструкцию. На выходе нужны три артефакта: исходники проекта с изменениями, отчет `practice/REPORT.md` и три скриншота в `practice/screens/`.

Подробности по конкретным инструментам и типовым ошибкам смотрите в `./guides/` — там единый «источник истины».

---

## 4. Требования к среде

Нам нужны: установленный Node.js (актуальная LTS‑версия), выбранный один пакетный менеджер (npm **или** yarn) и доступ к терминалу. Эти условия проверяются в самом начале занятия.

---

## 5. Структура проекта

Минимальная структура:
```
project/
  index.html
  package.json
  vite.config.js
  src/
    main.js
    styles/
      _variables.scss
      main.scss
  practice/
```

Ключевая идея структуры: `index.html` отвечает за разметку, `src/main.js` — за небольшую UI‑логику, `src/styles/_variables.scss` — за тему и токены, `src/styles/main.scss` — за импорт Bulma и сборку пользовательских стилей.

---

## 6. Пошаговая практика

### Шаг 0. Проверка окружения
Проверяем версии `node` и выбранного менеджера пакетов. Для деталей см. `./guides/nodejs.md`, `./guides/npm.md` и `./guides/yarn.md`. Если yarn не установлен, используйте инструкцию установки в `./guides/yarn.md`.

**Контроль:** команды `node -v` и `npm -v`/`yarn -v` работают.

### Шаг 1. Инициализация проекта
Устанавливаем зависимости выбранным менеджером.

**npm:**
```bash
npm install
```

**yarn:**
```bash
yarn
```

**Контроль:** создан файл lock (`package-lock.json` или `yarn.lock`).

### Шаг 2. Запуск dev‑сервера
Запускаем dev‑сервер, чтобы видеть быстрые изменения в браузере.

```bash
npm run dev
```
или
```bash
yarn dev
```

**Контроль:** сайт доступен в браузере, изменения применяются без перезапуска.

Внутренний workflow связки yarn + Vite + Sass описан отдельно: `./guides/workflow.md`.

### Шаг 3. Кастомизация Bulma
Переопределяем минимум три переменные в `src/styles/_variables.scss` **до** импорта Bulma. Примеры переменных и принципы — в `./guides/sass.md` и `./guides/bulma.md`.

```scss
$primary: #c65a3a;
$body-background-color: #f3efe7;
$family-primary: "Space Grotesk", sans-serif;
```

**Контроль:** цвета и типографика меняются по всему сайту.

### Шаг 4. Создание кастомных блоков
Добавляем минимум два собственных блока (например, карточки проектов и секцию «процесс»). Главный критерий — визуальное отличие от стандартных компонентов Bulma и ясная структура.

**Контроль:** блоки выглядят как уникальные, а не как дефолтные элементы фреймворка.

### Шаг 5. Проверка адаптивности
Открываем сайт в мобильном режиме (DevTools) и проверяем читаемость текста, работу burger‑меню и отсутствие горизонтальной прокрутки.

### Шаг 6. Production‑сборка
Собираем проект и проверяем preview.

```bash
npm run build
npm run preview
```

**Контроль:** сборка проходит без ошибок, preview показывает итоговый сайт.

Примечание: при запуске `yarn dev` или `npm run dev` могут появляться предупреждения Sass о депрекации `@import` и функций Bulma. Это ожидаемо для текущих версий и не мешает работе проекта.

---

## 7. Расширение проекта (по выбору)

После базового минимума можно добавить один или несколько дополнительных модулей. Выберите минимум один вариант и зафиксируйте в отчете, что именно сделано.

Ниже — подробные сценарии расширения с шагами и примерами кода. Все примеры адаптированы под текущую структуру проекта.

### 7.1. Фильтр проектов по тегам
**Идея**: у каждой карточки есть набор тегов, а кнопки‑фильтры показывают только подходящие карточки.

**Минимум**: кнопки‑фильтры и скрытие/показ карточек. Проверка: меняется набор карточек при выборе тега.

**Разметка**: добавьте `data-tags` и кнопки‑фильтры.
```html
<div class="buttons" id="projectFilters">
  <button class="button is-light" data-filter="all">Все</button>
  <button class="button is-light" data-filter="ui">UI</button>
  <button class="button is-light" data-filter="landing">Landing</button>
</div>

<div class="columns is-multiline">
  <div class="column is-one-third" data-tags="ui,landing">
    <div class="card">...</div>
  </div>
  <div class="column is-one-third" data-tags="ui">
    <div class="card">...</div>
  </div>
</div>
```

**JS‑логика** (показ/скрытие через класс `is-hidden`):
```js
const filters = document.querySelector('#projectFilters')
const cards = [...document.querySelectorAll('[data-tags]')]

filters?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]')
  if (!button) return

  const filter = button.dataset.filter
  cards.forEach((card) => {
    const tags = (card.dataset.tags || '').split(',')
    const matches = filter === 'all' || tags.includes(filter)
    card.classList.toggle('is-hidden', !matches)
  })
})
```

**Ссылки на исходники**: `index.html`, `src/main.js`, `src/styles/main.scss`.

---

### 7.2. Переключение темы
**Идея**: у страницы есть минимум две темы (например, светлая и темная). Выбор сохраняется в `localStorage`.

**Минимум**: две темы и переключатель. Проверка: сохраняется выбранная тема после обновления.

**Разметка**: добавьте кнопку или переключатель.
```html
<button class="button is-small" id="themeToggle">Сменить тему</button>
```

**CSS‑переменные**: определите цвета для двух тем.
```scss
:root {
  --bg: #ffffff;
  --text: #1f2937;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --text: #e2e8f0;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

**JS‑логика**:
```js
const toggle = document.querySelector('#themeToggle')
const key = 'theme'

const applyTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value)
}

const saved = localStorage.getItem(key) || 'light'
applyTheme(saved)

toggle?.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  localStorage.setItem(key, next)
  applyTheme(next)
})
```

**Ссылки на исходники**: `index.html`, `src/main.js`, `src/styles/main.scss`.

---

### 7.3. Плавная навигация по якорям
**Идея**: клики по пунктам меню плавно прокручивают страницу, активный пункт подсвечивается.

**Минимум**: плавный скролл и активное состояние пункта меню. Проверка: переходы заметно плавные.

**CSS‑плавность**:
```scss
html {
  scroll-behavior: smooth;
}
```

**JS‑подсветка активного пункта** (через `IntersectionObserver`):
```js
const links = [...document.querySelectorAll('a[href^="#"]')]
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean)

const setActive = (id) => {
  links.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`)
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) setActive(entry.target.id)
  })
}, { threshold: 0.6 })

sections.forEach((section) => observer.observe(section))
```

**Ссылки на исходники**: `index.html`, `src/main.js`, `src/styles/main.scss`.

---

### 7.4. Форма контакта с базовой валидацией
**Идея**: форма показывает ошибки при неправильном вводе и не отправляется, пока поля не корректны.

**Минимум**: проверка пустых полей и email‑формата. Проверка: при ошибке выводится сообщение.

**Разметка**:
```html
<form id="contactForm">
  <div class="field">
    <label class="label">Имя</label>
    <div class="control">
      <input class="input" name="name" type="text" />
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" name="email" type="email" />
    </div>
  </div>
  <p class="help is-danger" id="contactError"></p>
  <button class="button is-primary" type="submit">Отправить</button>
</form>
```

**JS‑валидация**:
```js
const form = document.querySelector('#contactForm')
const error = document.querySelector('#contactError')

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()

  if (!name || !email) {
    error.textContent = 'Заполните все поля.'
    return
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!isEmail) {
    error.textContent = 'Введите корректный email.'
    return
  }

  error.textContent = ''
  form.reset()
})
```

**Ссылки на исходники**: `index.html`, `src/main.js`.

---

### 7.5. Секция достижений со счетчиками
**Идея**: числа плавно увеличиваются при появлении секции на экране.

**Минимум**: анимированное увеличение чисел при появлении секции. Проверка: счетчики запускаются при скролле.

**Разметка**:
```html
<section id="stats">
  <div class="columns">
    <div class="column">
      <p class="title" data-counter="120">0</p>
      <p class="subtitle">Проектов</p>
    </div>
  </div>
</section>
```

**JS‑анимация**:
```js
const counters = [...document.querySelectorAll('[data-counter]')]

const animate = (el) => {
  const target = Number(el.dataset.counter)
  const duration = 1200
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    el.textContent = Math.floor(progress * target)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

const statsObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animate(entry.target)
      obs.unobserve(entry.target)
    }
  })
}, { threshold: 0.6 })

counters.forEach((counter) => statsObserver.observe(counter))
```

**Ссылки на исходники**: `index.html`, `src/main.js`.

---

### 7.6. Умный список навыков
**Идея**: навыки сгруппированы, каждый элемент раскрывается, показывая краткое описание.

**Минимум**: отображение навыков с группировкой и короткими описаниями. Проверка: навык раскрывается/сворачивается.

**Разметка** (группы + раскрытие):
```html
<div class="content">
  <h3 class="title is-4">Frontend</h3>
  <details>
    <summary>HTML</summary>
    <p>Семантика, доступность и структура страницы.</p>
  </details>
  <details>
    <summary>CSS</summary>
    <p>Модульные стили и работа с UI‑фреймворком.</p>
  </details>
</div>
```

**CSS‑акцент**:
```scss
details {
  margin-bottom: 0.75rem;
}

details > summary {
  cursor: pointer;
  font-weight: 600;
}
```

**Ссылки на исходники**: `index.html`, `src/styles/main.scss`.

---

## 8. Отчетность

Отчет фиксирует ход работы и служит подтверждением результата. В отчете должны быть: краткое описание целей, список выполненных шагов, три скриншота (главный экран, секция проектов, мобильная версия), вывод о полученных навыках и версии инструментов (node + выбранный менеджер).

---

## 9. Контрольные вопросы

1. Для чего нужен `node` в статическом проекте?
2. Почему нельзя смешивать `npm` и `yarn`?
3. Где должны быть определены переменные Bulma?
4. Чем отличается `vite dev` от `vite build`?
5. В каких случаях актуален `webpack`?
6. Чем препроцессор отличается от UI‑фреймворка?

---

## 10. Критерии оценки

1. Проект запускается и собирается без ошибок.
2. Bulma кастомизирована через Sass.
3. Есть собственные визуальные блоки.
4. Соблюдена структура проекта.
5. Отчет оформлен корректно и содержит скриншоты.
6. Код проекта читабельный и структурированный.
7. Дополнительные улучшения по выбору описаны и реализованы (если выполнялись).

---

## 11. Чеклист перед сдачей

- Dev‑сервер запускается без ошибок.
- В `src/styles/_variables.scss` изменены минимум 3 переменные.
- Есть минимум 2 кастомных блока.
- Сделаны 3 скриншота и помещены в `practice/screens/`.
- Отчет заполнен полностью.
- Дополнительные улучшения (если делались) описаны в отчете.

---

## 12. Итог

Практическая работа демонстрирует полный цикл сборки статического сайта с современным инструментарием и показывает взаимосвязь между уровнями стека: runtime → зависимости → сборка → стили → UI‑фреймворк. Это базовый, но очень показательный маршрут, который затем переносится на любые современные фронтенд‑проекты.
