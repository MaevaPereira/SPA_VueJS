<script setup>
import City from "@/components/City.vue";
import { reactive } from 'vue'

const data= reactive({
  cities: [
    {
      id: 1,
      name: 'Ville 1',
      weather: 'Ensoleillé',
      temperature: 22.0,
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Ville 2',
      weather: 'Peu nuageux',
      temperature: 19.5,
      updatedAt: new Date()
    }
  ]
})

</script>

<template>

  <div class="cities-list">
    <h1>Météo - Liste des villes</h1>
  </div>

 <div >
   <City v-for="city in data.cities"
    :key="city.id"
    :name="city.name"
    :weather="city.weather "
    :temperature="city.temperature "
    :updatedAt="city.updatedAt"
  />

    <!--<City />
    <City name=" Ville test" weather="il fait moche" :temperature="20.55" :updatedAt="new Date()"  />
    -->
  </div>

</template>

<style scoped>

</style>