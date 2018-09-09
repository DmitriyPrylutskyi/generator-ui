<h1 align="center">
    <a href="https://lectrum.io" target="_blank" rel="noopener noreferrer">
        <img src="./static/favicon/favicon-woodsmoke.svg" alt="Lectrum favicon" width="25" />
    </a>
    Генератор UI-проекта от Lectrum
</h1>
<br>

<div align="center">
    <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/generator-ui.svg?longCache=true&style=flat-square"
        alt="Package version" />
    <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/generator-ui.svg?longCache=true&style=flat-square" alt="Last commit"
    />
    <!-- Dependencies -->
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?longCache=true&style=flat-square" alt="Dependencies"
    />
    <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square" alt="Last update"
    />
</div>
<div align="center">
    <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
            alt="Подписывайся на наш Facebook" />
    </a>
</div>
<br>
<br>

<h3 align="center">
    👋🏼 Добро пожаловать!
</h3>
<p>
    🚀 Этот репозиторий содержит исходный код генератора UI-проекта. Мы постоянно обновляем генератор самыми вкусными фичами.
</p>
<br>
<p>
    🛰 Данная инструкция содержит информацию по использованию генератора.
</p>
<br>

### Что это генератор проекта?

`Генератор проекта` — это программа `Node.js`. Генератор помогает поддерживать состояние проекта в хорошей форме.  
Это достигается путём вынесения настроек среды разработки в единое место. Например — этот репозиторий.

### Что умеет генератор?

#### Развернуть проект

Перейди в директорию с проектом и выполни следующую команду:

```bash
sudo yo @lectrum/ui
```

#### Обновить развёрнутый проект

Чтобы обновить развёрнутый проект сперва нужно обновить генератор проекта:

```bash
sudo npm i -g @lectrum/generator-ui
```

Обновив генератор до последней версии можно обновить развёрнутый проект выполнив команду:

```bash
yo @lectrum/ui
```

**`Yeoman`** попросить подтвердить обновление устаревших файлов. Нужно согласится. 
Когда **`Yeoman`** закончит обновление файлов нужно обновить зависимости:

```bash
yarn
```

или

```bash
npm i
```

В результате окружение разработки обновлено до последней версии и можно приступать к кодингу.

### 🤖 Краткий обзор команд для сгенерированного проекта

> Заметка: эти команды станут доступны после первого выполнения команды **`yo @lectrum/ui`**.\
> Запускать через **`yarn «имя команды»`** или **`npm run «имя команды»`**.

| Команда           | Описание                                                                        |
| ----------------- | ------------------------------------------------------------------------------- |
| `start`           | запустить проект для разработки                                                 |
| `build`           | запустить сборку проекта                                                        |
| `build:analyze`   | запустить сборку проекта и запустить режим детального анализа результата сборки |
| `lint:javascript` | провести анализ исходного JavaScript-кода на стилистические ошибки              |
| `lint:css`        | провести анализ исходного CSS-кода на стилистические ошибки                     |
| `lint`            | провести анализ всего исходного кода на стилистические ошибки                   |
| `test`            | запустить тесты                                                                 |
| `test:watch`      | запустить тесты в watch-режиме                                                  |
| `test:debug`      | запустить тесты в debug-режиме                                                  |
| `soundcheck`      | запустить все линтеры и тесты                                                   |
| `prettier`        | отформатировать исходный код с помощью prettier                                 |
| `deploy`          | собрать и задеплоить приложение на свой Github Pages                                      |
| `commit`          | сделать [стандартизированный коммит](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)                                      |

> Заметка: после деплоя на Github Pages приложение будет доступно по адресу:\
> https://**`имя-твоего-пользователя-гитхаб`**.github.io/**`имя-твоего-репозитория-с-приложением`**
### Установка

1. [Скачай и установи](https://nodejs.org/en/) последнюю LTS-версию Node.js;
2. Выполни в консоли `node -v` и убедись, что установлена версия Node.js не ниже `v8.11.4`;
3. Введи в консоли `npm -v` и убедись, что установлена последняя версия npm не ниже `5.6.0`;
4. Затем установи [Yeoman](http://yeoman.io) и `@lectrum/generator-ui` с помощью [npm](https://www.npmjs.com/):

```bash
npm install -g yo
npm install -g @lectrum/generator-ui
```

После чего ты сможешь сгенерировать проект выполнив в терминале следующую команду:

```bash
yo @lectrum/ui
```

### Что нужно знать о [Yeoman](http://yeoman.io)

 * 🌟 У Yeoman сердце сделано из чистого золота.
 * 🙏🏼 Yeoman — персонаж чуткий и нравственный, но работать с ним легко и приятно.
 * 👩🏼‍🎓 Подробнее Yeoman [можно изучить на официальном сайте](http://yeoman.io/learning/index.html).

<br>

### 🤔 FAQ

Ответы на часто задаваемые вопросы можно найти [здесь](https://github.com/Lectrum/FAQ#-faq).
<br>

### Лицензия

MIT © [Lectrum](https://lectrum.io)

<div align="center">
  <!-- Сделано с любовь -->
    <img src="https://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>
