<template>
  <Header_Pagina />
  <Carrusel_Compo />

  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <LoginApp />
      </v-col>
    </v-row>
  </v-container>

  <InstucionalApp />

  <AppFooter />
</template>

<script setup>
  import LoginApp from '@/components/LoginApp.vue'
  import Header_Pagina from '@/components/HeaderApp.vue'
  import Carrusel_Compo from '@/components/CarruselCompo.vue'
  import InstucionalApp from '@/components/InstucionalApp.vue'
  import AppFooter from '@/components/AppFooter.vue'
</script>

