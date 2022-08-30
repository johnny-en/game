<template>
  <container>
    <sprite :texture="enemy"></sprite>
  </container>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "@/game";
import config from "@/config";
import { random } from "@/utils";

export function useEnemy() {
  const enemys = ref([]);

  let timer;
  function createEnemys(delay) {
    const speed = config?.enemy?.speed;
    return setTimeout(() => {
      enemys.value.push({
        x: random(0, 420),
        y: -100,
        speed: typeof speed === "function" ? speed() : speed,
        width: 308,
        height: 207,
        HP: 2,
      });
      timer = createEnemys(random(2, 5) * 1000);
    }, delay);
  }
  createEnemys(random(2, 5) * 1000);

  function move() {
    function handleTicker() {
      enemys.value.forEach((enemy, index) => {
        enemy.y += enemy.speed;
        if (enemy.y > 1300) {
          displayEnemy(index);
        }
      });
    }
    onMounted(() => {
      game.ticker.add(handleTicker);
    });
    onUnmounted(() => {
      game.ticker.remove(handleTicker);
      console.log(timer);
      clearTimeout(timer);
    });
  }
  move();

  function hitEnemy(enemy, enemyIndex) {
    enemy.HP--;
    if (enemy.HP <= 0) {
      displayEnemy(enemyIndex);
    }
  }

  function displayEnemy(index) {
    enemys.value.splice(index, 1);
  }

  return {
    enemys,
    hitEnemy,
  };
}
</script>
<script setup>
// 敌方飞机
import enemy from "@/assets/enemy.png";
</script>

<style lang="scss" scoped></style>
