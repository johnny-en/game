import { createApp } from "./runtime-canvas";
import { getRootContainer } from "./game";
import App from "./App.vue";

// vue template -> render -> vnode -> mountElement -> appendRootContainer

// pixijs

// canvas renderer

createApp(App).mount(getRootContainer());
