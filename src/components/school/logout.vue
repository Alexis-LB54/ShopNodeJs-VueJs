<template>
  <button @click="unSetStore">Se déconnecter</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useTokenStore } from "../../stores/token";

const router = useRouter();
const tokenStore = useTokenStore();

function unSetStore() {
  tokenStore.token = "";
  tokenStore.refresh_token = "";
  tokenStore.roles = "";
  tokenStore.$reset();
  router.push("/login");
}
</script>

<style>
</style>