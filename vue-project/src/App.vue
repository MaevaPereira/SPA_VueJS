<script setup>
const onListClick = () => {
  alert("test")
}
</script>

<template>

<div>
  <h1>Météo</h1>

   <p @click= "onListClick">
   lien météo... (en théorie) :  <a href="https://vuejs.org/" target="_blank" rel="noopener">titre du lien</a>
   </p>

  <router-view></router-view>
  <router-link to="/villes">Liste des villes</router-link>
</div>

</template>

<style scoped>

</style>
