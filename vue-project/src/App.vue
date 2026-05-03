<script setup>
import CitiesList from "./views/CitiesList.vue"

const onListClick = () => {
  alert("test")
}
</script>

<template>

<div>
  <h1>Météo</h1>

   <p @click= "onListClick">
   lien météo... (en théorie) :  <a href="https://vuejs.org/" target="_blank" rel="noopener">titre du petit lien</a>
   </p>
  <CitiesList />
</div>

</template>

<style scoped>

</style>
