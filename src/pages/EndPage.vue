<template>
  <container>
    <sprite :texture="endPage"></sprite>
    <sprite
      x="228"
      y="512"
      :texture="restartBtn"
      @click="startGame"
      :interactive="true"
    ></sprite>
  </container>
</template>

<script setup>
import { defineEmits } from "vue";
import endPage from "@/assets/endPage.jpg";
import restartBtn from "@/assets/restartBtn.png";

const emit = defineEmits(["change-page"]);
const startGame = () => {
  emit("change-page", "GamePage");
};
</script>

<style lang="scss" scoped></style>
