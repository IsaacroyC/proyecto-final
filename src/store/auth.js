import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login, logout, checkSession } from '@/config/auth.config'

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const error = ref(null)

  // Computed
  const userRole = computed(() => user.value?.rol || null)
  const userName = computed(() => user.value?.username || '')
  const userEmail = computed(() => user.value?.email || '')
  
  const isAdmin = computed(() => userRole.value === 'Administrador')
  const isCoordinador = computed(() => userRole.value === 'Coordinador')
  const isDocente = computed(() => userRole.value === 'Docente')
  const isSecretario = computed(() => userRole.value === 'Secretario')
  const isAcudiente = computed(() => userRole.value === 'Acudiente')

  // Actions
  const loginUser = async (credentials) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await login(credentials)
      
      if (response.success) {
        user.value = response.user
        isAuthenticated.value = true
        return { success: true }
      } else {
        error.value = response.message
        return { success: false, message: response.message }
      }
    } catch (err) {
      error.value = err.message || 'Error al iniciar sesión'
      return { success: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  const logoutUser = async () => {
    loading.value = true
    
    try {
      await logout()
      user.value = null
      isAuthenticated.value = false
      return true
    } catch (err) {
      console.error('Error al cerrar sesión:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const verifySession = async () => {
    loading.value = true
    
    try {
      const response = await checkSession()
      
      if (response.isAuthenticated) {
        user.value = response.user
        isAuthenticated.value = true
      } else {
        user.value = null
        isAuthenticated.value = false
      }
      
      return response.isAuthenticated
    } catch (err) {
      console.error('Error al verificar sesión:', err)
      user.value = null
      isAuthenticated.value = false
      return false
    } finally {
      loading.value = false
    }
  }

  const updateUser = (userData) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
    }
  }

  const clearError = () => {
    error.value = null
  }

  const reset = () => {
    user.value = null
    isAuthenticated.value = false
    loading.value = false
    error.value = null
  }

  // Verificar permisos
  const hasPermission = (permission) => {
    // Aquí puedes implementar una lógica más compleja de permisos
    // Por ahora, solo verificamos el rol
    
    const permissions = {
      'usuarios.crear': ['Administrador'],
      'usuarios.editar': ['Administrador'],
      'usuarios.eliminar': ['Administrador'],
      'usuarios.ver': ['Administrador', 'Coordinador', 'Secretario'],
      
      'estudiantes.crear': ['Administrador', 'Coordinador', 'Secretario'],
      'estudiantes.editar': ['Administrador', 'Coordinador', 'Secretario'],
      'estudiantes.eliminar': ['Administrador'],
      'estudiantes.ver': ['Administrador', 'Coordinador', 'Secretario', 'Docente'],
      
      'docentes.crear': ['Administrador', 'Coordinador'],
      'docentes.editar': ['Administrador', 'Coordinador'],
      'docentes.eliminar': ['Administrador'],
      'docentes.ver': ['Administrador', 'Coordinador', 'Secretario'],
      
      'notas.crear': ['Administrador', 'Coordinador', 'Docente'],
      'notas.editar': ['Administrador', 'Coordinador', 'Docente'],
      'notas.eliminar': ['Administrador', 'Coordinador'],
      'notas.ver': ['Administrador', 'Coordinador', 'Docente', 'Acudiente'],
      
      'matriculas.crear': ['Administrador', 'Coordinador', 'Secretario'],
      'matriculas.editar': ['Administrador', 'Coordinador', 'Secretario'],
      'matriculas.eliminar': ['Administrador'],
      'matriculas.ver': ['Administrador', 'Coordinador', 'Secretario'],
      
      'reportes.ver': ['Administrador', 'Coordinador'],
      'reportes.exportar': ['Administrador', 'Coordinador', 'Secretario']
    }
    
    const allowedRoles = permissions[permission] || []
    return allowedRoles.includes(userRole.value)
  }

  const hasAnyPermission = (permissionsList) => {
    return permissionsList.some(permission => hasPermission(permission))
  }

  const hasAllPermissions = (permissionsList) => {
    return permissionsList.every(permission => hasPermission(permission))
  }

  return {
    // State
    user,
    isAuthenticated,
    loading,
    error,
    // Computed
    userRole,
    userName,
    userEmail,
    isAdmin,
    isCoordinador,
    isDocente,
    isSecretario,
    isAcudiente,
    // Actions
    loginUser,
    logoutUser,
    verifySession,
    updateUser,
    clearError,
    reset,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions
  }
})