<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card elevation="8" class="rounded-lg">
          <v-card-title class="text-h4 text-center py-6 bg-primary">
            <v-icon size="large" class="mr-2">mdi-lock-outline</v-icon>
            Iniciar Sesión
          </v-card-title>

          <v-card-text class="pa-8">
            <v-alert
              v-if="error"
              type="error"
              variant="tonal"
              closable
              class="mb-4"
              @click:close="error = ''"
            >
              {{ error }}
            </v-alert>

            <v-alert
              v-if="success"
              type="success"
              variant="tonal"
              class="mb-4"
            >
              {{ success }}
            </v-alert>

            <v-form @submit.prevent="handleLogin" ref="form">
              <v-text-field
                v-model="username"
                label="Usuario"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                density="comfortable"
                :rules="[rules.required]"
                class="mb-3"
                :disabled="loading"
              />

              <v-text-field
                v-model="password"
                label="Contraseña"
                prepend-inner-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                density="comfortable"
                :rules="[rules.required]"
                :disabled="loading"
              />

              <v-btn
                type="submit"
                color="primary"
                size="large"
                block
                :loading="loading"
                class="mt-4"
              >
                <v-icon left class="mr-2">mdi-login</v-icon>
                Ingresar
              </v-btn>
             

             <UsuarioApp></UsuarioApp>
            </v-form>

            <v-divider class="my-6" />
            
            <div class="text-caption text-center text-medium-emphasis">
              <div class="mb-2">Usuarios de prueba:</div>
              <div><strong>admin</strong> / admin123</div>
              <div><strong>user</strong> / user123</div>
              <div><strong>juan</strong> / juan123</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// Asegúrate de que esta ruta sea correcta dentro de tu proyecto
import authService from '@/services/authservice' 

import UsuarioApp from '@/components/UsuarioApp.vue' // Asegúrate de que esta ruta sea correcta

const router = useRouter()

// Estado del formulario
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')
const success = ref('')
const form = ref(null)

// Reglas de validación
const rules = {
  required: value => !!value || 'Este campo es requerido'
}

/**
 * Maneja el proceso de login
 */
const handleLogin = async () => {
  // Validar formulario
  const { valid } = await form.value.validate()
  if (!valid) return

  // Limpiar mensajes anteriores
  error.value = ''
  success.value = ''
  loading.value = true

  try {
    // Intentar autenticar
    const result = await authService.login(username.value, password.value)

    if (result.success) {
      success.value = `¡Bienvenido ${result.user.nombre}!`
      
      // Redirigir al dashboard después de 1 segundo
      setTimeout(() => {
        router.push('/dashboard/ingresos')
      }, 1000)
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Error inesperado. Por favor intente nuevamente.'
    console.error('Error en login:', err)
  } finally {
    loading.value = false
  }
}

</script>

<style scoped>
/* Mantienes los estilos */
.fill-height {
  /* Asegura que el componente se estire para dar el efecto de fondo */
  min-height: 100vh; 
  background: linear-gradient(135deg, #01661f 0%, #04ca2f 100%);
}

.v-card {
  overflow: hidden;
}
</style>
