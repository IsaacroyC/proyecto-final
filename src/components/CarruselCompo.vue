<template>
  <v-carousel
    height="500"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://1.bp.blogspot.com/_HAH3ayndyIk/S4vVUiIxexI/AAAAAAAAABg/VcuYYxlEk6Y/S165/ESCUDO+BINESTAR.JPG',
    'https://th.bing.com/th/id/R.616ef0f5df64eaec6d46ef7ed6481a66?rik=z1KWefymeXtAlg&riu=http%3a%2f%2fwww.sedcartagena.gov.co%2fwp-content%2fuploads%2f2023%2f02%2fI.E.-Nuestra-Se%c3%b1ora-de-F%c3%a1tima-se-suman-al-Frente-de-Seguridad-Escolar-02.jpeg&ehk=ftJBlLLZaMyBwQMuGUgsxOeUvJV5z0psrUfGlvgX%2fF0%3d&risl=&pid=ImgRaw&r=0',
    'https://obispadocastrensecolombia.org/wp-content/uploads/2018/04/fatima-6.jpeg'
  ]
</script>