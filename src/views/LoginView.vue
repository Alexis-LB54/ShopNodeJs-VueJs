
<template>
  <div>
    <form @submit.prevent="login">
      <label for="username"> </label>
      <input
        type="text"
        v-model="user.username"
        name="username"
        placeholder="Username"
        id="username"
        required
      />
      <label for="password"> </label>
      <input
        type="password"
        v-model="user.password"
        name="password"
        placeholder="Password"
        id="password"
        required
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useTokenStore } from "../stores/token";
import { useRoute, useRouter } from "vue-router";

const Storedutoken = useTokenStore();
const router = useRouter();

const user = ref({
  username: "",
  password: "",
});

async function login() {
  let response = await fetch("http://localhost:96/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user.value),
  })
    .then((r) => r.json())
    .catch();
  Storedutoken.token = response.token;
  router.push("/liste");
  console.log("voir user", user);
}
</script>

<style scoped>
</style>