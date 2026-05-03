<script setup>
/*
import { reactive } from 'vue'
const data = reactive({
  name: 'Ma ville', // nom de la ville
  weather: 'Peu nuageux', // descriptif météo
  temperature: 20.55, // température en °C
  updatedAt: new Date() // date de dernière mise à jour
})
*/

const props = defineProps({
  name: String,
  weather: String,
  temperature: Number,
  updatedAt: Date,
})
</script>

<template>
<!--
    {{ data.name }}
    {{ data.weather }}
    {{ data.temperature }}
    {{ data.updatedAt.toLocaleString()}}
-->
  {{ name }}
  {{ weather }}
  {{ temperature }}
  {{ updatedAt.toLocaleString()}}
  </template>

  <style scoped>

  </style>