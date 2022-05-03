
<template>
  <div>
    <form action="/auth" method="post">
      <label for="username"> </label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        id="username"
        required
      />
      <label for="password"> </label>
      <input
        type="password"
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