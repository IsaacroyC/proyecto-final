import axios from 'axios'

const API_URL = 'http://localhost:4000'

export default {
  // Login: busca usuario y guarda en localStorage
  async usuario(usua) {
      const response = await axios.post(`${API_URL}/users`,usua)
      

  }
}
    