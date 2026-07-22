# Портфолио Екатерины Шемякинской

Одностраничное редакционное портфолио научного журналиста и коммуникатора. Проект собран на React, Vite и TypeScript, использует Tailwind CSS как базовый CSS-слой и Framer Motion для scroll- и 3D-анимаций.

## Запуск

Требуется Node.js 22+ и npm 10+.

```bash
npm install
npm run dev
```

Полезные команды:

```bash
npm run lint     # статическая проверка
npm run build    # TypeScript + production-сборка
npm run preview  # локальный просмотр папки dist
```

## Где обновлять контент

Весь контент портфолио находится в одном файле:

```text
src/data/portfolio.ts
```

Перед публикацией найдите явные TODO:

```bash
rg -n "TODO" src/data/portfolio.ts
```

В этом файле нужно заменить:

- `contact.email` — адрес без `mailto:`;
- `articles[].title` и `articles[].url` у каждого издания.

Пока URL не заполнены, интерфейс показывает аккуратное неактивное состояние. Пустых или битых ссылок сайт не создает.

## Структура

```text
src/
  components/       секции и переиспользуемые UI-компоненты
  data/portfolio.ts весь редактируемый контент и TODO
  App.tsx            композиция страницы
  styles.css         дизайн-система, сетки и адаптивность
public/
  favicon.svg
  og-image.svg/jpg
  site.webmanifest
```

Анимации учитывают системную настройку `prefers-reduced-motion`. Основной контент остается доступным без hover и сложного движения. Контрольные размеры интерфейса: 375, 768 и 1440 px.

## Деплой

### Vercel

1. Импортируйте репозиторий в Vercel.
2. Framework Preset: `Vite`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

Эти параметры уже продублированы в `vercel.json`.

### Netlify

Импортируйте репозиторий — команда сборки и папка публикации будут прочитаны из `netlify.toml`. SPA-redirect также настроен.

### GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` собирает и публикует сайт при push в `main`.

1. Откройте **Settings → Pages** репозитория.
2. В **Build and deployment → Source** выберите **GitHub Actions**.
3. Отправьте изменения в ветку `main` или запустите workflow вручную.

В Vite используется относительный `base`, поэтому ассеты корректно работают и в подпапке репозитория GitHub Pages.

## SEO

В `index.html` настроены title, description, Open Graph, Twitter Card, robots, favicon, web manifest и JSON-LD для `Person`. Перед подключением собственного домена при желании можно заменить относительное изображение Open Graph на абсолютный URL опубликованного `og-image.jpg`.
