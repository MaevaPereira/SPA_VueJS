<script setup>
import City from "@/components/City.vue";

</script>

<template>

<div class="cities-list">
  <h1>Météo - Liste des villes</h1>
  <!--<City />-->
  <City name="Ma ville" weather="il fait moche" :temperature="20.55" :updatedAt="new Date()"  />
</div>
</template>

<style scoped>

</style>