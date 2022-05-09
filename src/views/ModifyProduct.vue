<template>
  <div>
    <form @submit.prevent="modifyProduct">
      <label for="id">id</label>
      <input type="text" v-model="modifyArticle.id" id="id" />

      <label for="title">title</label>
      <input type="text" v-model="modifyArticle.title" id="title" />

      <label for="price">price</label>
      <input type="number" v-model="modifyArticle.price" id="price" />
      <input type="submit" value="Modifier" />
    </form>
    <button v-on:click="deleteArticle()"> Supprimer</button>

  </div>
</template>

<script setup lang="ts">
import { useListeCourse } from "../stores/list";
import { useRoute } from "vue-router";

const route = useRoute();
const Articlestore = useListeCourse();
const ArticleId = route.params.id;

var modifyArticle = Articlestore.list.find(
  (c) => String(c.id) === route.params.id
);

async function modifyProduct() {
  let response = await fetch("http://localhost:96/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifyArticle),
  })
    .then((r) => r.json())
    .catch();
  console.log("voir modif", response);
}

async function deleteArticle() {
  let response = await fetch(`http://localhost:96/delete/${ArticleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch();
  console.log("fonction lancée!", response);
}

// export default {
//   components: {},
//   mounted() {
//     this.articles.value = this.useListeCourse.articles.find((c) => String(c.id) === route.params.id);
//   },

//   computed: {
//     ...mapWritableState(useListeCourse, ["list"]),
//     ...mapState(useListeCourse, ["getList"]),
//   },
//   methods: {},
// };
</script>

<style scoped>

</style>