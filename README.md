# react-toukey-hook

![NPM](https://img.shields.io/npm/l/react-toukey-hook?color=blue&style=flat-square) ![npm](https://img.shields.io/npm/v/react-toukey-hook?color=blue&style=flat-square)

## Install

```shell
npm i react-toukey-hook -S
```

or

```shell
pnpm add react-toukey-hoos -S
```

## Basic Use

```javascript
import { useToukey } from "react-toukey-hook";

function App() {
  useTouke("space", () => {
    console.log("space pressed");
  });
  return <div>hello world</div>;
}
```
