<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Logout from "./components/school/logout.vue";
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Connexion</RouterLink>
        <RouterLink to="/liste">Liste de Produit</RouterLink>
        <RouterLink to="/add">Ajouter un Produit</RouterLink>
        <RouterLink to="/signup">Inscription</RouterLink>
        <Logout />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  background-image: url("https://images2.alphacoders.com/118/thumb-1920-1181219.jpg");
  background-size: cover;
}

template {
  display: flex;
  justify-content: center;
}

/* div {
  display: flex;
} */

#app{
  text-align: center;
}

#tableaudeliste{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

a,
.green {
  text-decoration: none;
  color: rgb(234, 255, 0);
  transition: 0.4s;
  font-size: 0.8cm;
  width: 5cm;
}

nav {
  display: flex;
  
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7ffe9;
  padding: 5px;
  width: 500px;
  border: 3px solid #ff3700;
  border-radius: 5px;
}

p {
  color: #ff3700;
}

button {
  display: flex;
  justify-content: center;
}

input {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 420px;
  /* margin-left: 5px; */
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>
