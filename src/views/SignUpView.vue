
<template>
  <div>
    <form @submit.prevent="signup">
      <label for="email"> </label>
      <input
        type="email"
        v-model="user.email"
        name="email"
        placeholder="Email"
        id="email"
        required
      />
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

const user = ref({
  email: "",
  username: "",
  password: "",
});

async function signup() {
  let response = await fetch("http://localhost:96/signup", {
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

// async function sendmail() {
//   let response = await fetch("http://localhost:96/mail", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user.value),
//   })
//     .then((r) => r.json())
//     .catch();
//   console.log("voir user", user);
// }
</script>

<style scoped>

</style>