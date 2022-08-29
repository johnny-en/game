<template>
  <container>
    <sprite :texture="bullet"></sprite>
  </container>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "@/game";
import config from "@/config";

export function useBullet() {
  const bullets = ref([]);

  const addBullet = (position) => {
    bullets.value.push({ ...position });
  };

  const move = () => {
    const speed = config?.plane?.bullet?.speed || 10;
    const handleTicker = () => {
      bullets.value.forEach((bullet, index) => {
        bullet.y -= speed;
        if (bullet.y <= -100) {
          bullets.value.splice(index, 1);
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };
  move();

  return {
    bullets,
    addBullet,
  };
}
</script>
<script setup>
import bullet from "@/assets/bullet.png";
</script>

<style lang="scss" scoped></style>
