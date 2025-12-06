<template>
    <div>
        <v-row class="mt-2 d-flex justify-center">
            <v-col cols="4"
             class="fondoimagen">
              <v-card
                    class="mx-auto pa-12 pb-8"
                    elevation="8"
                    rounded="lg"
                    
                    >
              <v-img
                  class="mx-auto my-6"
                   max-width="228"
                   src="https://1.bp.blogspot.com/_HAH3ayndyIk/S4vVUiIxexI/AAAAAAAAABg/VcuYYxlEk6Y/S165/ESCUDO+BINESTAR.JPG"
               ></v-img>
              </v-card>
            </v-col>
            <v-col cols="7" class="fondo">
                <v-card
                    class="mx-auto pa-12 pb-8"
                    elevation="8"
                    rounded="lg"
                    
                    >
                    <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

                    <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                    ></v-text-field>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Contraseña

                        <a
                        class="text-caption text-decoration-none text-green"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Forgot login password?</a>
                    </div>

                    <v-text-field
                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline"
                        variant="outlined"
                        @click:append-inner="visible = !visible"
                    ></v-text-field>

                    <v-card
                        class="mb-12"
                        color="surface-variant"
                        variant="tonal"
                    >
                        <v-card-text class="text-medium-emphasis text-caption">
                      ADVERTENCIA: DESPUES DE 3 INTENTOS FALLIDOS, SU CUENTE SERA CONGELADA TEMPORALMENTE "Forgot login password?" below to reset the login password.
                        </v-card-text>
                    </v-card>

                    <v-btn
                        class="mb-8"
                        color="green lighten-1"
                        size="large"
                        variant="tonal"
                        block
                        @click="login()"
                    >
                        Log In
                    </v-btn>

                    <v-card-text class="text-center">
                        <a
                        class="text-black text-decoration-none"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                        </a>
                    </v-card-text>
                    </v-card>

            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

  const login = () =>{
    
   router.push('dashboard')
   
  }
</script>
<style scoped>
   .fondo{
    background-color: rgb(62, 119, 45);
   }

   .fondoimagen{
    background-color: rgb(110, 187, 47);
   }

</style>
