
<template>
  <div>
    <form @submit.prevent="login">
      <p>Veuillez choisir un avatar:</p>
      <input type="hidden" name="MAX_FILE_SIZE" value="250000" />
      <input type="file" name="fic" size="50" />
      <input type="submit" value="choisir" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useTokenStore } from "../stores/token";
import { useRoute, useRouter } from "vue-router";

const Storedutoken = useTokenStore();
const router = useRouter();

const profile = ref({
  photo: "",
});
</script>

<style scoped>
</style>