<template>
<div>Coucou</div>
  <ul>
    <li v-for="articles in getList" :key="articles.title">
      <form>
        <p>
          {{ articles.title }} {{ articles.price }}
          {{ articles.currency }}
        </p>
        <router-link :to="{ name: 'modify', params: { id: articles.id } }">
          <button class="btn btn-primary">Voir le produit</button>
        </router-link>
      </form>
    </li>
  </ul>
</template>

<script>
import { useListeCourse } from "../stores/list";
import { mapState, mapWritableState } from "pinia";
import { fetchConsults } from "../plugins/fetch";

export default {
  components: {
  },
  mounted(){
      fetchConsults()
  },

  computed: {
    ...mapWritableState(useListeCourse, ["list"]),
    ...mapState(useListeCourse, ['getList'])
  },
  methods: {
      
  },
};
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