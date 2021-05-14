# 🥞 FrenchKiss UIkit

[![Version](https://img.shields.io/npm/v/@frenchkiss-libs/uikit)](https://www.npmjs.com/package/@frenchkiss-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@frenchkiss-libs/uikit)](https://www.npmjs.com/package/@frenchkiss-libs/uikit)

FrenchKiss UIkit is a set of React components and hooks used to build pages on FrenchKiss's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @frenchkiss-libs/uikit`

## Setup

### Theme

Before using FrenchKiss UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@frenchkiss-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@frenchkiss-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://frenchkiss-finance.github.io/frenchkiss-uikit/)
