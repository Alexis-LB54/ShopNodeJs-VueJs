
<template>
  <div>
    <form @submit.prevent="login">
      <label for="username"> </label>
      <input
        type="text" v-model="user.username"
        name="username"
        placeholder="Username"
        id="username"
        required
      />
      <label for="password"> </label>
      <input
        type="password" v-model="user.password"
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

const user = ref({
  username: "",
  password: "",
});

async function login() {
  let response = await fetch("http://localhost:96/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("voir user", user);
}

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #e5f9ff;
  padding: 10px;
  width: 500px;
  border: 3px solid #49b0ff;
  border-radius: 5px;
}

input {
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-left: 5px;
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>