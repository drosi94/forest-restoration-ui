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

## Installation

Install all the packages

```bash

  yarn bootstrap
```

## Run UI storybook

Run locally the storybook with the UI components. It will run at [localhost:6006](localhost:6006)

```bash

  yarn start:ui
```

## Run PWA

Run locally the PWA. It will run at [localhost:3000](localhost:3000)

```bash

  yarn start:pwa
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
