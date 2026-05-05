<script setup>
import City from "@/components/City.vue";
import { reactive } from "vue";
import { onMounted } from 'vue'
import CityMap from "../components/CityMap.vue";

onMounted(() => {
  data.loading = true

  async function fetchAPI() {
    try {
      const reponse = await fetch(
          `https://api.openweathermap.org/data/2.5/find?lat=45.758&lon=4.765&cnt=20&cluster=yes&lang=fr&units=metric&APPID=${import.meta.env.VITE_API_KEY}`,
      );
      if (!reponse.ok) {
        throw new Error(`Erreur HTTP : ${reponse.status}`);
      }
      const json = await reponse.json();
      return json;
    } catch (error) {
      console.error(`Impossible d'obtenir les villes : ${error}`);
      }
  }

  const jsonPromise = fetchAPI();
    jsonPromise.then((json) => {
      data.cities = json.list
      data.loading = false
      console.log(json.list[0])//voir les données pour data.cities (F12)
    }).catch((error) => {
      data.error = error
      data.loading = false
    })
})

const data = reactive({
  cities: [],
  loading: false,
  error: null,
})
</script>

<template>
  <div class="cities-list">
    <h1>Météo - Liste des villes</h1>
  </div>

  <div v-if="data.loading=== true">
    requête en cours
  </div>

  <div v-else-if="data.error != null" style="color: red">
    {{ data.error }}
  </div>

  <div v-else>
    <City v-for="city in data.cities"
          :key="city.id"
          :name="city.name"
          :weather="city.weather[0].description"
          :temperature="city.main.temp"
          :updatedAt="new Date(city.dt * 1000)"
    />
  </div>
  <city-map>

  </city-map>
</template>

<style scoped>
</style>