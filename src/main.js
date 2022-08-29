import { createApp } from "./runtime-canvas";
import { getRootContainer } from "./game";
import App from "./App.vue";
import "@/styles/index.scss";

// vue template -> render -> vnode -> mountElement -> appendRootContainer

// pixijs

// canvas renderer
console.warn = () => {};
createApp(App).mount(getRootContainer());
