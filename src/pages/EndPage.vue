<template>
  <container>
    <sprite :texture="endPage"></sprite>
    <sprite
      x="228"
      y="512"
      :texture="restartBtn"
      :interactive="true"
      @click="startGame"
    ></sprite>
  </container>
</template>

<script setup>
// 结束游戏
import endPage from "@/assets/endPage.jpg";
import restartBtn from "@/assets/restartBtn.png";

const emit = defineEmits(["change-page"]);
const startGame = () => {
  emit("change-page", "GamePage");
};
</script>

<style lang="scss" scoped></style>
