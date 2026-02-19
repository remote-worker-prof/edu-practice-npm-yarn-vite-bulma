# npm — учебник для проекта

## Зачем это читать
npm — базовый менеджер пакетов для экосистемы Node.js. Он управляет зависимостями, запускает скрипты из `package.json` и обеспечивает воспроизводимую установку через lockfile. Этот документ объясняет, как npm устроен, как он работает в проекте, и как избежать типичных ошибок.

## Что такое npm
npm — это:
- **CLI‑инструмент** (команды `npm install`, `npm run`, `npm exec`, `npx`).
- **Реестр пакетов** (npm registry), где публикуются и откуда скачиваются зависимости.
- **Веб‑сайт** (npmjs.com) для поиска пакетов и управления аккаунтом.

## npm и Node.js
npm поставляется вместе с Node.js. Это значит, что установка Node.js обычно автоматически дает и npm. Проверка:
```bash
node -v
npm -v
```

## Главные файлы

### `package.json`
`package.json` — это JSON‑манифест проекта. В нем описано:
- метаданные проекта (имя, версия, описание),
- **scripts** — команды, которые запускаются через `npm run`,
- **dependencies** — зависимости приложения,
- **devDependencies** — зависимости для разработки,
- дополнительные настройки.

Важно: `scripts` — это словарь событий жизненного цикла и команд, которые npm запускает в нужный момент.

### `package-lock.json`
`package-lock.json` фиксирует конкретные версии всех зависимостей. Он нужен, чтобы установка была воспроизводимой и одинаковой на разных машинах. Lockfile также документирует дерево зависимостей, и npm использует его при `npm install`.

Общее правило: lockfile коммитится в репозиторий и не удаляется без причины.

## Базовый workflow

### Установка зависимостей
```bash
npm install
```
- Без аргументов npm ставит все зависимости, перечисленные в `package.json`.
- Результат установки — папка `node_modules` и (если еще нет) `package-lock.json`.

### Добавление зависимости
```bash
npm install lodash
```
По умолчанию пакет попадет в `dependencies`.

### Добавление dev‑зависимости
```bash
npm install -D sass
```
Пакет будет записан в `devDependencies`.

### Дополнительные флаги
- `--save-exact` — фиксирует точную версию.
- `--no-save` — не записывает в `package.json`.
- `--save-optional` — записывает в `optionalDependencies`.

### Глобальная установка
```bash
npm install -g serve
```
Глобальные пакеты ставятся в системный префикс и доступны как команды в терминале.

## Скрипты и запуск команд

### Что такое `scripts`
В `package.json` есть секция `scripts`. Это словарь команд, которые можно запускать:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Запуск:
```bash
npm run dev
npm run build
npm run preview
```

### Как npm запускает скрипты
- Скрипты выполняются из корня проекта.
- В `PATH` добавляется `node_modules/.bin`, поэтому можно вызывать локально установленные утилиты по имени.
- npm автоматически добавляет переменные окружения вида `npm_package_*` (например, `npm_package_name`).

## Версии и диапазоны (semver)
Зависимости обычно задаются диапазонами версий. Основные формы:
- `^1.2.3` — совместимые версии в рамках major‑ветки.
- `~1.2.3` — приблизительно равные версии (патчи).
- `1.2.x` — любые патчи для 1.2.
- `>=1.2.7 <2.0.0` — явный диапазон.

npm использует semver‑правила при разрешении зависимостей.

## npx и npm exec
`npx` позволяет запускать команды из пакетов без глобальной установки. Он может использовать локальные зависимости или временно скачивать пакеты. В современных версиях npm `npx` основан на `npm exec`.

Примеры:
```bash
npx eslint .

npm exec -- prettier --check .
```

## Конфигурация npm (`.npmrc`)
npm читает настройки из нескольких источников:
- параметры командной строки,
- переменные окружения,
- файлы `.npmrc` (локальный, пользовательский, глобальный, встроенный).

Формат `.npmrc` — ini (`key = value`). Локальный `.npmrc` в корне проекта влияет только на этот проект.

## Типовые ошибки
- Смешивание npm и yarn в одном проекте (несовместимые lockfiles).
- Ручное редактирование `package-lock.json`.
- Запуск `npm run` вне корня проекта.
- Удаление `node_modules` без последующего `npm install`.

## Мини‑практикум
1. Установите зависимости: `npm install`.
2. Добавьте новую dev‑зависимость: `npm install -D eslint`.
3. Добавьте в `scripts` команду `lint`.
4. Запустите `npm run lint`.
5. Убедитесь, что `package-lock.json` обновился.

## Чеклист готовности
- `package.json` содержит нужные `scripts`.
- `package-lock.json` присутствует и коммитится.
- `npm install` выполняется без ошибок.
- `npm run dev` поднимает dev‑сервер.

## Полезные ссылки
- https://docs.npmjs.com/cli/v11/configuring-npm/package-json
- https://docs.npmjs.com/cli/v11/using-npm/scripts
- https://docs.npmjs.com/cli/v7/commands/npm-install
- https://docs.npmjs.com/cli/v10/commands/npx
- https://docs.npmjs.com/cli/v9/configuring-npm/npmrc
- https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json
- https://docs.npmjs.com/cli/v6/configuring-npm/package-locks
- https://docs.npmjs.com/cli/v6/using-npm/semver/
- https://docs.npmjs.com/cli/v8/commands/npm
- https://www.npmjs.com/npm
- https://nodejs.org/en/download/
