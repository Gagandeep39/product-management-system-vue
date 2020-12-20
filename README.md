# Project Managemet System

- [Project Managemet System](#project-managemet-system)
  - [Deployment](#deployment)
  - [Description](#description)
  - [Other composition API projects](#other-composition-api-projects)
  - [Route](#route)

## Deployment

- Checkout deployment at <>

## Description

- A Composition API demo
- Composition API with routing

## Other composition API projects

- Basic demo <https://github.com/Gagandeep39/vue-composition-api-demo>
- Project Viewver (Advanced) <https://github.com/Gagandeep39/project-viewer-vue>

## Route

- `this.$route`, `this.$router` is not available in composition API
- INstead we use `useRoute`

```js

import { useRoute } from 'vue-router';
setup() {
  const route = useRoute();
  console.log(route);
  return {};
}
```
