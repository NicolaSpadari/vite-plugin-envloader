<h2 align='center'>vite-plugin-envloader</h2>

<p align='center'>Automatically inject `import.meta.env` variables into `process.env`</p>

<p align='center'>
  <a href='https://github.com/NicolaSpadari/vite-plugin-envloader/blob/main/license.txt'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg'>
  </a>
</p>

## Why?

Vite.js provides its own mechanism (meta env) for exposing environment variables through `import.meta.env`, but hostings like Netlify can't import variables defined in `import.meta.env`. [Here is the issue](https://github.com/vitejs/vite/issues/562)

This plugin injects environment variables in `process.env` by configuring the `define` option.

## Installation

Install the package as a development dependency:

```sh
npm i -D vite-plugin-envloader
```

## Usage

Add this to your plugin list in the vite config file:

```js
import { defineConfig } from "vite"
import EnvLoader from "vite-plugin-envloader"

export default defineConfig({
    plugins: [
        // ...
        EnvLoader(),
        // ...
    ],
});
```

Variables defined in the `.env` file like:

```js
VITE_API_KEY="12345"
```

Will be available in online hostings through `process.env.VITE_API_KEY`, while still allowing you to use `import.meta.env.VITE_API_KEY` in your code.

## License

This library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).