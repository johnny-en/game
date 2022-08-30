<template>
  <container>
    <sprite :texture="plane"></sprite>
  </container>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { planeMove } from "./planeMove";

export function usePlane({ onAttack }) {
  const planeInfo = ref({
    x: 250,
    y: 650,
    width: 258,
    height: 364,
  });

  const attack = () => {
    const handleAttack = (e) => {
      if (e.code === "Space") {
        onAttack &&
          onAttack({
            x: planeInfo.value.x + 103,
            y: planeInfo.value.y - 50,
          });
      }
    };

    onMounted(() => {
      window.addEventListener("keyup", handleAttack);
    });

    onUnmounted(() => {
      window.removeEventListener("keyup", handleAttack);
    });
  };
  attack();
  planeMove(planeInfo.value);

  return {
    planeInfo,
  };
}
</script>
<script setup>
// 我方飞机
import plane from "@/assets/plane.png";
</script>

<style lang="scss" scoped></style>
