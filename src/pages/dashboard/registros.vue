<template>
  <v-card class="mx-auto" max-width="600">
    <v-toolbar color="green-lighten-5" dark>
      <v-toolbar-title>Usuarios Registrados</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="fetchUsers">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list lines="two">
      <v-list-subheader>Usuarios de la API ({{ users.length }})</v-list-subheader>

      <v-list-item
        v-for="user in users"
        :key="user.id"
        :title="user.name"
        :subtitle="user.email"
        :prepend-avatar="user.avatar || 'mdi-account-circle'" 
        ripple
      >
        <template v-slot:append>
          <v-btn
            icon
            variant="text"
            color="primary"
            @click="editItem(user)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <v-list-item v-if="users.length === 0">
        <v-list-item-title>No se encontraron usuarios.</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
  
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Editar Usuario</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="editedUser.name"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="editedUser.email"
                label="Correo Electrónico"
                type="email"
                required
              ></v-text-field>
            </v-col>
            </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn color="blue-darken-1" variant="flat" @click="saveItem">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
<script setup>
import { ref, onMounted } from 'vue';
// Importa Axios para manejar las peticiones HTTP (si aún no lo tienes, instálalo con: npm install axios)
import axios from 'axios'; 

// Estado reactivo para la lista de usuarios
const users = ref([]);
// Estado para manejar el diálogo de edición
const dialog = ref(false);
// Estado para almacenar el usuario que se está editando
const editedUser = ref({});
// URL de tu API
const API_URL = 'http://localhost:3000/api/users'; // ¡Ajusta esta URL a tu API!

// --- Funciones de Interacción con la API ---

/**
 * 1. Obtener todos los usuarios de la API
 */
const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    // Transforma los datos de la API al formato que usa v-list-item si es necesario.
    // Asumiremos que la API devuelve un array de objetos con `id`, `name`, `email`.
    users.value = response.data.map(user => ({
      ...user,
      // Puedes adaptar los campos a la estructura de Vuetify si lo deseas, 
      // pero por simplicidad, usaremos los nombres directos.
    }));
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    // Manejar error en la interfaz si es necesario
  }
};

/**
 * 2. Abrir el diálogo de edición con los datos del usuario
 * @param {Object} user - El usuario a editar
 */
const editItem = (user) => {
  editedUser.value = { ...user }; // Crea una copia para evitar modificar el original directamente
  dialog.value = true;
};

/**
 * 3. Enviar los cambios del usuario a la API
 */
const saveItem = async () => {
  try {
    // Petición PUT para actualizar el usuario
    const url = `${API_URL}/${editedUser.value.id}`;
    await axios.put(url, editedUser.value);
    
    // Actualizar la lista localmente
    const index = users.value.findIndex(u => u.id === editedUser.value.id);
    if (index !== -1) {
      users.value[index] = { ...editedUser.value };
    }

    dialog.value = false; // Cerrar el diálogo
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    // Mostrar un error al usuario si la API falla
  }
};

// Cargar usuarios al montar el componente
onMounted(() => {
  fetchUsers();
});

// Exportar funciones y estado para usarlos en el template
</script>
</script>