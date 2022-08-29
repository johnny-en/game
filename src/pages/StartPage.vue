<template>
  <container>
    <sprite :texture="startPage"></sprite>
    <sprite
      x="228"
      y="512"
      :texture="startBtn"
      :interactive="true"
      @click="startGame"
    ></sprite>
  </container>
</template>

<script setup>
// 开始游戏
import startPage from "@/assets/startPage.jpg";
import startBtn from "@/assets/startBtn.png";

const emit = defineEmits(["change-page"]);
const startGame = () => {
  emit("change-page", "GamePage");
};
</script>

<style lang="scss" scoped></style>
