<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="green- lighthen-2">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Colegio de la policia nacional. BIENESTAR SOCIAL
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>NUSEFA-2025</strong>
    </div>
  </v-footer>
</template>

<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-instagram',
  ]
</script>