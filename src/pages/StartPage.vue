<template>
  <container>
    <sprite :texture="startPage"></sprite>
    <sprite
      x="228"
      y="512"
      :texture="startBtn"
      @click="startGame"
      :interactive="true"
    ></sprite>
  </container>
</template>

<script setup>
import { defineEmits } from "vue";
import startPage from "@/assets/startPage.jpg";
import startBtn from "@/assets/startBtn.png";

const emit = defineEmits(["change-page"]);
const startGame = () => {
  emit("change-page", "GamePage");
};
</script>

<style lang="scss" scoped></style>
