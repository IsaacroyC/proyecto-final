<template>
  <v-app-bar :elevation="2"
  height=150>
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>NUSEFA - MONTERÍA</v-app-bar-title>
  <template v-slot:append>
          <v-btn  @click="dialog = true">Iniciar Sesion</v-btn>
        </template>
</v-app-bar>

 <v-dialog
    v-model="dialog"
    width="600px"
>
       <LoginApp></LoginApp>
  </v-dialog>  
</template>
<script setup>
  import { ref } from 'vue'
     const dialog = ref(false)
</script>