
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
</style>