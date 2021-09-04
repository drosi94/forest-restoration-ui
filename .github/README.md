[![powered-by-vercel](https://user-images.githubusercontent.com/3253526/130764295-181b7862-0dd4-459a-9096-6202847d41be.png)](https://vercel.com/?utm_source=forest-restoration&utm_campaign=oss)

# Forest Restoration UI

> This monorepo contains the code for the forest restoration progressive web application.

- [Forest Restoration UI](#forest-restoration-ui)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Run UI storybook](#run-ui-storybook)
  - [Run PWA](#run-pwa)

## About

Find more about the project [here](https://drive.google.com/drive/folders/1WFFxw82sffyXTs-3liRE7-qbZ3dvEKc9?usp=sharing)

## Getting Started

You need to install [node](https://nodejs.org/en/), yarn & lerna

```bash

  npm install -g yarn lerna
```

Optionally, you can install doppler (Enviromental Secret Management, TODO: LINK WITH INSTALLATION GUIDE) or you can create a .env.local file in the monorepo root you want to work. Please send an email in dev@forestrestoration.gr to provide you with the enviromental secrets that you need for the local enviroment.

## Installation

Install all the packages

```bash

  yarn install
```

## Run UI storybook

Run locally the storybook with the UI components. It will run at [localhost:6006](localhost:6006)

```bash

  yarn start:ui
```

## Run PWA

Run locally the PWA. It will run at [localhost:3000](localhost:3000)

If you have install & configure the doppler CLI

```bash

  yarn start:pwa
```

If you have .env.local file in packages/pwa root folder

```bash

  yarn start:pwa:env
```

## Run Tests

Run all the tests

```bash

  yarn test
```

Run PWA tests

```bash

  yarn workspace @forest-restoration/pwa test
```


Run UI snapshot tests

```bash

  yarn workspace @forest-restoration/ui test
```
