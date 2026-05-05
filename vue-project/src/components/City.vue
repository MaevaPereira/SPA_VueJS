<script setup>

defineProps({
  name: String,
  weather: String,
  temperature: Number,
  updatedAt: Date,
})

</script>

<template>

  <h1>{{ name }}</h1>
  <p>{{ weather }}</p>
  <p>{{ temperature }}°C</p>
  <!-- <p>{{ format(updatedAt.toLocaleString())}}</p>-->
   <p>{{ updatedAt.toLocaleString()}}</p>

 </template>

   <style scoped>

   </style>