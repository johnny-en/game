<template>
  <container>
    <sprite :texture="plane"></sprite>
  </container>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
export function usePlane({ onAttack }) {
  const planeInfo = ref({
    x: 0,
    y: 0,
  });

  const move = () => {
    const speed = 10;
    const handleMove = (e) => {
      switch (e.code) {
        case "ArrowUp":
          planeInfo.value.y -= speed;
          break;
        case "ArrowDown":
          planeInfo.value.y += speed;
          break;
        case "ArrowLeft":
          planeInfo.value.x -= speed;
          break;
        case "ArrowRight":
          planeInfo.value.x += speed;
          break;
      }
    };

    onMounted(() => {
      window.addEventListener("keyup", handleMove);
    });

    onUnmounted(() => {
      window.removeEventListener("keyup", handleMove);
    });
  };
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
  move();
  attack();

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
