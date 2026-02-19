# Bulma — учебник для проекта

## Зачем это читать
Bulma — это CSS‑фреймворк без встроенного JavaScript. Он дает готовые классы, сетку, компоненты и базовую визуальную систему, а поведение вы добавляете сами. В этом проекте Bulma отвечает за визуальную «сетку», типографику и базовые компоненты интерфейса, а интерактивность подключается отдельно через `src/main.js`.

Этот учебник объясняет, как Bulma устроена, как ее подключать и кастомизировать, какие классы действительно важны для проекта, и как не попасть в типичные ловушки.

## Версия в проекте
В `package.json` используется Bulma `0.9.4`. Это важно: документация и примеры ниже ориентируются именно на ветку 0.9.x, потому что в более новых версиях появились дополнительные возможности и другая система кастомизации.

## Что такое Bulma простыми словами
Bulma — это набор CSS‑классов, которые вы добавляете к HTML‑элементам. Никакой «магии» с JavaScript внутри нет: Bulma стилизует разметку, но не управляет поведением.

Практическая мысль:
- Для внешнего вида вы выбираете нужные классы Bulma.
- Для поведения (например, раскрыть меню) пишете JavaScript сами.

## Роль Bulma в этом проекте
- Быстрое создание структуры страницы: секции, контейнеры, колонки.
- Единый стиль для кнопок, форм и карточек.
- Базовая типографика и отступы без ручной настройки.
- Возможность кастомизации через Sass‑переменные.

Связанные файлы:
- `src/styles/main.scss` — подключение Bulma и переменных.
- `src/styles/_variables.scss` — переопределение части переменных.
- `src/main.js` — поведение элементов (например, навигации).
- `index.html` — базовая разметка и входная точка приложения.

## Основные идеи Bulma
### 1. Классы вместо компонентов
В Bulma нет компонентов в JS‑смысле. Есть классы, которые можно комбинировать. Пример: `button is-primary is-large` — один HTML‑элемент, но визуально другой.

### 2. Модификаторы
Многие классы Bulma начинаются с `is-` и `has-`. Это модификаторы поведения и внешнего вида.
Примеры:
- `is-primary` — основной цвет.
- `is-large` — увеличенный размер.
- `has-text-centered` — центрирование текста.

### 3. Мобильный подход
Bulma — mobile‑first. Многие компоненты на мобильных устройствах ведут себя вертикально, а на больших — горизонтально. Это надо учитывать при компоновке страницы.

## Быстрый старт в этом проекте
### 1. Установка
Bulma уже присутствует в зависимостях. Если нужно установить заново:
```bash
yarn add bulma
```

### 2. Подключение Bulma
Подключение выполняется в `src/styles/main.scss`. Важно: Bulma импортируется **после** ваших базовых переменных, чтобы они могли переопределить значения по умолчанию.

Пример минимального подключения:
```scss
@import "./variables";
@import "bulma/bulma";
@import "./base";
@import "./layout";
@import "./components";
```

### 3. Запуск проекта
```bash
yarn dev
```
Откроется dev‑сервер Vite, а Bulma‑стили будут доступны в браузере.

## Структура Bulma: как искать нужные классы
Bulma организована в несколько больших групп. Это помогает быстро находить то, что нужно:
- **Layout**: каркас страницы — `section`, `container`, `hero`, `footer`, `level`, `media object`, `tiles`.
- **Columns**: система сетки — `columns` и `column`.
- **Elements**: базовые элементы интерфейса — `button`, `title`, `image`, `tag`, `table`.
- **Components**: более сложные блоки — `navbar`, `card`, `message`, `modal`, `tabs`.
- **Form**: стили для форм — `input`, `textarea`, `select`, `checkbox`.
- **Helpers**: утилитарные классы — цвет, отступы, типографика, видимость, flex.

Это тот «словарь», которым вы пользуетесь при сборке интерфейса.

## Сетка и компоновка
### Колонки (Columns)
Сетка в Bulma устроена просто: контейнер `columns` и внутри любое количество `column`. Все колонки автоматически получают одинаковую ширину.

Пример:
```html
<div class="columns">
  <div class="column">Колонка 1</div>
  <div class="column">Колонка 2</div>
  <div class="column">Колонка 3</div>
</div>
```

Как этим пользоваться в проекте:
- Делите страницу на смысловые блоки (например: боковая панель + контент).
- На мобильных колонки автоматически становятся вертикальными.
- Если нужно оставить горизонтальную сетку на мобильных, используйте модификатор `is-mobile`.

### Секции и контейнеры
`section` — вертикальный блок страницы с отступами сверху и снизу.
`container` — ограничивает ширину контента и выравнивает его по центру.

Пример:
```html
<section class="section">
  <div class="container">
    <h1 class="title">Заголовок</h1>
    <p class="subtitle">Подзаголовок</p>
  </div>
</section>
```

### Hero
`hero` — большой блок для верхней части страницы (презентационные секции, заголовки).

Пример:
```html
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">Hero</p>
    <p class="subtitle">Короткое описание</p>
  </div>
</section>
```

## Элементы и компоненты
### Кнопки
Кнопки строятся из `button` + модификаторы `is-*`.

Пример:
```html
<div class="buttons">
  <button class="button">Обычная</button>
  <button class="button is-primary">Основная</button>
  <button class="button is-link is-light">Ссылочная</button>
</div>
```

### Формы и select
Bulma стилизует формы через обертки `field`, `control`, `input` и `select`.

Пример:
```html
<div class="field">
  <label class="label">Страна</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Выберите вариант</option>
        <option>Пункт 1</option>
      </select>
    </div>
  </div>
</div>
```

Подсказка: `select` — это не сам элемент, а обертка, которая дает правильные стили.

### Navbar
Bulma дает разметку и стили, но не управляет открытием/закрытием меню. Для этого нужен JS.

Базовая структура:
```html
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">Лого</a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navMenu" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">Главная</a>
    </div>
  </div>
</nav>
```

JS‑переключение:
```js
const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('#navMenu');

burger?.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu?.classList.toggle('is-active');
});
```

Фиксированная навигация:
- Добавьте `is-fixed-top` или `is-fixed-bottom` на `navbar`.
- Добавьте `has-navbar-fixed-top` или `has-navbar-fixed-bottom` на `html` или `body`.

## Helpers: утилитарные классы
Helpers — это короткие классы для типовых задач:
- Цвет текста и фона: `has-text-primary`, `has-background-light`.
- Отступы: классы семейства `m-*` и `p-*` для внешних и внутренних отступов.
- Типографика: `is-size-5`, `has-text-weight-bold`.
- Видимость: `is-hidden-touch`, `is-hidden-desktop`.
- Flexbox: `is-flex`, `is-justify-content-center`, `is-align-items-center`.

Важное правило: если можно решить задачу helper‑классом, не пишите новый CSS.

## Адаптивность (Responsiveness)
Bulma использует мобильный подход:
- На мобильных `columns` складываются вертикально.
- `level` также становится вертикальным.
- Навигация скрывается и требует кнопки‑бургер.

Основные брейкпоинты:
- `mobile`: до 768px.
- `tablet`: 769–1023px.
- `desktop`: 1024–1215px.
- `widescreen`: 1216–1407px.
- `fullhd`: 1408px и выше.

Если нужно «зафиксировать» горизонтальное поведение на мобильных, используйте `is-mobile`.

## Кастомизация через Sass
### Почему это важно
Bulma дает сотни Sass‑переменных. Они организованы по уровням: базовые, вычисляемые, общие, и специфичные для компонентов.

Это означает:
- Вы можете изменить тему целиком, изменив несколько переменных.
- Все компоненты автоматически подстроятся.

### Стратегия настройки
1. Установите Bulma.
2. Подготовьте Sass‑сборку.
3. Создайте файл, где вы переопределяете переменные и импортируете Bulma.

### Пример настройки переменных
```scss
@charset "utf-8";

$primary: #3b82f6;
$link: #2563eb;
$family-primary: "Inter", sans-serif;
$body-background-color: #f8fafc;

@import "bulma/bulma";
```

### Модульный импорт (экономия CSS)
Если проекту не нужен весь Bulma, можно импортировать только части. Пример структуры:
```scss
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/_all.sass";
@import "bulma/sass/elements/button.sass";
@import "bulma/sass/elements/title.sass";
@import "bulma/sass/form/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/layout/section.sass";
@import "bulma/sass/layout/hero.sass";
```

Это уменьшает итоговый CSS и ускоряет загрузку.

## Частые ошибки
- Подключили Bulma, но забыли `meta viewport` в `index.html`.
- Переопределили переменные **после** импорта Bulma — и ничего не изменилось.
- Использовали классы, которых нет в 0.9.x (из новых версий).
- Ожидали, что `navbar-burger` откроет меню сам — но нет, нужен JS.

## Мини‑практикум
1. Сверстайте секцию «О проекте» с `section`, `container`, `title`, `subtitle`.
2. Разбейте секцию на 2 колонки: текст + изображение.
3. Добавьте кнопки с классами `button is-primary` и `button is-light`.
4. Вынесите цвета в переменные Bulma и переопределите базовую палитру.
5. Добавьте мобильную версию меню с `navbar-burger` и JS‑переключением.

## Чеклист готовности
- Bulma подключена через Sass.
- `meta viewport` присутствует в `index.html`.
- Есть минимум 1 секция с сеткой `columns`.
- Есть хотя бы один стилизованный компонент (например, `navbar` или `card`).
- Переменные Bulma переопределены в `src/styles/_variables.scss`.

## Полезные ссылки
- https://versions.bulma.io/0.9.4/
- https://versions.bulma.io/0.9.4/documentation/
- https://versions.bulma.io/0.9.4/documentation/columns/basics/
- https://versions.bulma.io/0.9.4/documentation/form/select/
- https://versions.bulma.io/0.9.4/documentation/customize/concepts/
- https://versions.bulma.io/0.9.4/documentation/customize/with-node-sass/
- https://versions.bulma.io/0.9.4/documentation/overview/responsiveness/
- https://versions.bulma.io/0.9.2/documentation/components/navbar/
- https://github.com/jgthms/bulma
