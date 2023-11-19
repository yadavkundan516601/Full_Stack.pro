---
title: React from Basics to Advance
author: kundan <yadavkundan516601@gmail.com>
category: Javascript, react
---

## React Basics

### React installation using vite

- There are many ways to install react app but here we are installing `react` app using `vite`.

```bash
#install using vite
npm create vite@latest

#Now install the node modules
npm install
```

- To run the `react` app use the script

```bash
npm run dev
```

### File structure (understanding the flow of react)

![React file structure](./images/Screenshot%20from%202023-11-19%2013-24-18.png)

React folder structure

> Points to remember while creating a component.
>
> - Use `Camelcase` to name the `file` & `function` to be exported/imported.
> - Use name `.jsx` in case of `vite`.

![Example](https://blog.webdevsimplified.com/articleAssets/2022-07/react-folder-structure/beginner.png)

- [Full Guide on How to Structure your React project](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)

### React element creation and variables

```javascript
// Custom react element creation
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* using the custom element */}
    {reactElement}
  </React.StrictMode>
);
```

Here, it took three parameters `tag`, `attributes object` and `children or text`

> Variables in react can be used by `{}`
> Note: only write evaluated expression within curly braces
