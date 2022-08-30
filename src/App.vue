<template>
  <container>
    <start-page
      v-if="currentPage === 'StartPage'"
      @change-page="handleChangePage"
    ></start-page>
    <game-page
      v-else-if="currentPage === 'GamePage'"
      @change-page="handleChangePage"
    ></game-page>
    <end-page
      v-else-if="currentPage === 'EndPage'"
      @change-page="handleChangePage"
    ></end-page>
  </container>
</template>

<script setup>
import { ref } from "vue";
import StartPage from "@/pages/StartPage.vue";
import GamePage from "@/pages/GamePage.vue";
import EndPage from "@/pages/EndPage.vue";

// 切换界面
const currentPage = ref("StartPage");
const handleChangePage = (pageName) => {
  currentPage.value = pageName;
};
</script>

<style lang="scss" scoped></style>
