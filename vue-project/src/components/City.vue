<script setup>
import { format } from 'timeago.js';
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
  <h1>{{ name }}</h1>
  <p>{{ weather }}</p>
  <p>{{ temperature }}°C</p>
  <p>{{ format(updatedAt.toLocaleString())}}</p>
</template>

  <style scoped>

  </style>