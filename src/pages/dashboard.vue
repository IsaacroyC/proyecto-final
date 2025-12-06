<template>
  <v-app id="inspire">
   
  <v-app-bar :elevation="2"
  height="150"
  image="https://losmejorescolegios.com/co/wp-content/uploads/sites/12/2023/10/WhatsApp-Image-2023-09-05-at-11.44.16-AM.jpg"
  color="white"
>
  <template v-slot:prepend>
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Nusefa</v-app-bar-title>
</v-app-bar>
      
  
    

    <v-navigation-drawer v-model="drawer" class="mt-2">
      <v-sheet
        class="pa-4"
        color="white"
      >
        <v-avatar
          class="mb-4"
          color="white"
          size="64"
        ></v-avatar>

        <div>NusefaPolicia@gmail.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="data in links"
          :key="data.icono"
          :prepend-icon="data.icon"
          :title="data.titulo"
          :to="data.enlace"
          color="green-darken-2"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
           
            cols="12"
          >
            <v-card>
              <v-list lines="four">
                <v-list-subheader :title="card"></v-list-subheader>

                   <router-view />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const cards = ['Today', 'Yesterday']
  const links = [
    {
        icono : "mdi-book-open",
        titulo : "Matriculas",
        enlace : "/dashboard/"
    },
    {
        icono : "mdi-chart-pie",
        titulo : "Estadisticas",
        enlace : "/dashboard/stats"
    },
    {
      icono : "mdi-account",
      titulo : "Registro",
      enlace : "/dashboard/registro"
    },
    {
        icono : "mdi-acount-group",
        titulo : "nuevos usuarios",
        enlace : "/dashboard/nuevos"
    },
    {
        icono : "mdi-acount-group",
        titulo : "ingresos nuevos",
        enlace : "/dashboard/ingreso"
    }
    
    ]

  const drawer = ref(false)
</script>