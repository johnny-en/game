<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="canvas"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import { Application, Sprite, Texture } from "pixi.js";
import logo from "@/assets/logo.png";
function useCanvas() {
  const app = new Application({
    width: 500,
    height: 500,
    backgroundColor: "0x87CEEB",
  });
  onMounted(() => {
    document.querySelector("#canvas").appendChild(app.view);
  });

  const img = new Sprite();
  const toggle = ref(false);
  img.texture = Texture.from(logo);
  img.anchor.set(0.5);
  img.x = app.screen.width / 2;
  img.y = app.screen.height / 2;

  img.interactive = true;
  img.on("pointertap", () => {
    !toggle.value ? addRotation() : removeRotation();
    toggle.value = !toggle.value;
  });

  const handleRotation = (delta) => {
    img.rotation += 0.1 * delta;
  };
  const addRotation = () => {
    app.ticker.add(handleRotation);
  };
  const removeRotation = () => {
    app.ticker.remove(handleRotation);
  };
  app.stage.addChild(img);
}
</script>

<script setup>
useCanvas();
</script>

<style lang="scss" scoped></style>
