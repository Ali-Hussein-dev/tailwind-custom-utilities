# tailwind-custom-utilities

## Motivation

If you use `flex` or `grid` then this plugin is for you. I used to have these utilities as components in every project I use Tailwindcss with.

## Installation

```shell
npm i -D tailwind-custom-utilities
```

then add the plugin to `tailwind.config.js`

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwind-custom-utilites"),
    // ...
  ],
};
```

## Flex Utilities

| Custom class        | TW classes                                  |
| ------------------- | ------------------------------------------- |
| `flex-row-start`    | flex items-center justify-start             |
| `flex-row-end`      | flex items-center justify-end               |
| `flex-row-center`   | flex items-center justify-center            |
| `flex-row-evenly`   | flex items-center justify-evenly            |
| `flex-row-around`   | flex items-center justify-around            |
| `flex-col-start`    | flex flex-col justify-center items-start    |
| `flex-col-end`      | flex flex-col justify-center items-end      |
| `flex-col-center`   | flex flex-col justify-center items-center   |
| `flex-col-baseline` | flex flex-col justify-center items-baseline |
| `flex-col-stretch`  | flex flex-col justify-center items-stretch  |

### usage

```html
  <div class="flex-row-center gap-x-6">
    <p>Lorem ipsum...</p>
    <p>Lorem ipsum...</p>
    <p>Lorem ipsum...</p>
  </div>
</div>
```

---

## Grid Utilities

Inspired by [ThirusOfficial](https://github.com/ThirusOfficial/tailwind-grid-auto-fit)

Create a responsive grid layout in Tailwind CSS without using media queries. It uses the auto-fit keyword in the
grid-template-columns CSS property to help you do the same.

### Usage

Use utilities like .grid-auto-fit-sm, .grid-auto-fit-xl to change the minimum and maximum item size of the responsive grid. This plugin includes five item sizes with the default minimum size being 16rem.

```html
<section class="grid gap-4 grid-auto-fit">
  <div class="p-4 bg-black">Item 1</div>
  <div class="p-4 bg-black">Item 2</div>
  <div class="p-4 bg-black">Item 3</div>
  <div class="p-4 bg-black">Item 4</div>
  <div class="p-4 bg-black">Item 5</div>
  <div class="p-4 bg-black">Item 6</div>
  <div class="p-4 bg-black">Item 7</div>
</section>
```

### Changing the grid item size

| Class                                 | Minimum item width |
| ------------------------------------- | ------------------ |
| `grid-auto-fit-xs`                    | `12rem`            |
| `grid-auto-fit-sm`                    | `14rem`            |
| `grid-auto-fit` or `grid-auto-fit-md` | `16rem`            |
| `grid-auto-fit-lg`                    | `18rem`            |
| `grid-auto-fit-xl`                    | `20rem`            |
| `grid-auto-fit-[13rem]`               | `13rem`            |

This plugin supports the use of arbitrary values if you want a custom minimum item size
