<template>
  <div>
    <form @submit.prevent="addProduct">
      <label for="title">title</label>
      <input type="text" v-model="article.title" id="title" />

      <label for="description">description</label>
      <input type="text" v-model="article.description" id="description" />

      <label for="price">price</label>
      <input type="number" v-model="article.price" id="price" />

      <label for="currency">currency</label>
      <input type="text" v-model="article.currency" id="currency" />

      <label for="brand">brand</label>
      <input type="text" v-model="article.brand" id="brand" />
      <input type="submit" value="Ajouter" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const article = ref({
  title: "",
  description: "",
  price: "",
  currency: "",
  brand: "",
});

async function addProduct() {
  let response = await fetch("http://localhost:96/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("voir modif", response);
}
</script>

<style >

</style>