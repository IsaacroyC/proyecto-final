<template>
  <v-row class="mt-3 mb-3">
    <v-col cols="12" md="4">
      <v-card
        title="Nuestra Institución"
        subtitle="Visión"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
      ></v-card>
      <div class="text-center text-caption">Using Props Only</div>
    </v-col>
    
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Sobre nosotros
        </template>
        
        <template v-slot:subtitle>
          Misión
        </template>
        
        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>
      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>
    
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Nuestros Valores</v-card-title>
          <v-card-subtitle>Compromiso y Excelencia</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          Demostrar control y autoridad para la convivencia y el desarrollo institucional.
        </v-card-text>
      </v-card>
      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>