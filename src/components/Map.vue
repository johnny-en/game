<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <container>
    <sprite :texture="mapImg" :y="map_y1"></sprite>
    <sprite :texture="mapImg" :y="map_y2"></sprite>
  </container>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "@/game";
function useMove() {
  const game_height = 1080;
  const map_y1 = ref(0);
  const map_y2 = ref(-game_height);

  // 地图滚动
  const speed = 10;
  const handleTicker = () => {
    map_y1.value += speed;
    map_y2.value += speed;
    if (map_y1.value >= game_height) map_y1.value = -game_height;
    if (map_y2.value >= game_height) map_y2.value = -game_height;
  };
  onMounted(() => {
    game.ticker.add(handleTicker);
  });
  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
  return {
    map_y1,
    map_y2,
  };
}
</script>

<script setup>
import mapImg from "@/assets/map.jpg";
const { map_y1, map_y2 } = useMove();
</script>

<style lang="scss" scoped></style>
