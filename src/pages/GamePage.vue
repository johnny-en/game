<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <Enemy
      v-for="(enemy, index) in enemys"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></Enemy>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script setup>
// 玩游戏
import Map from "@/components/Map.vue";
import Plane, { usePlane } from "@/components/Plane.vue";
import Enemy, { useEnemy } from "@/components/Enemy.vue";
import Bullet, { useBullet } from "@/components/Bullet.vue";
import { useFighting } from "./fighting";

const { planeInfo } = usePlane({
  onAttack(position) {
    addBullet(position);
  },
});
const { enemys, hitEnemy } = useEnemy();
const { bullets, addBullet, distoryBullet } = useBullet();

const emit = defineEmits(["change-page"]);
const gameover = () => {
  emit("change-page", "EndPage");
};

useFighting({
  planeInfo: planeInfo.value,
  enemys: enemys.value,
  bullets: bullets.value,
  gameover,
  distoryBullet,
  hitEnemy,
});
</script>

<style lang="scss" scoped></style>
