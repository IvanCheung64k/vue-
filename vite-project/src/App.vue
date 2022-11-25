<script setup>
import { ref } from "vue";
import Weather from "./components/Weather.vue";
</script>

<template>
  <div class="app-container">
    <Suspense>
      <Weather />
    </Suspense>
  </div>
</template>

<style scoped>
*{
  background-color: ivory;
  padding: 0%;
  margin: 0%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
  </style>