<script setup>
import { reactive } from 'vue'

const city = reactive({
  name: 'Ma ville', // nom de la ville
  weather: 'Peu nuageux', // descriptif météo
  temperature: 20.55, // température en °C
  updatedAt: new Date() // date de dernière mise à jour
})

</script>

<template>

  {{ city.name }}
  {{ city.weather }}
  {{ city.temperature }}
  {{ city.updatedAt.toLocaleString()}}

</template>

<style scoped>

</style>