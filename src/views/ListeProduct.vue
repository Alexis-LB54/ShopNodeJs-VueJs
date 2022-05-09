<template>
<div>Coucou</div>
  <ul id="tableaudeliste">
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
<style >

</style>