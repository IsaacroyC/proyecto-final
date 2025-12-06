import axios from 'axios'

const API_URL = 'http://localhost:4000'

export default {
  // Login: busca usuario y guarda en localStorage
  async login(username, password) {
    const response = await axios.get(`${API_URL}/users`)
    const user = response.data.find(
      u => u.username === username && u.password === password
    )
    
    if (user) {
      // Solo guardamos el usuario (sin token)
      const userSession = {
        id: user.id,
        username: user.username,
        email: user.email,
        nombre: user.nombre,
        estado: user.estado
      }
      localStorage.setItem('user', JSON.stringify(userSession))
      return { success: true, user: userSession }
    }
    return { success: false, message: 'Usuario o contraseña incorrectos' }
  },
  
  // Logout: limpia localStorage
  logout() {
    localStorage.removeItem('user')
  },
  
  // Verifica si hay sesión activa
  isAuthenticated() {
    return !!localStorage.getItem('user')
  },
  
  // Obtiene usuario actual
  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
}
