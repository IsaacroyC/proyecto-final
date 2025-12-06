<template>
  <div class="overview">
    <h2>📈 Overview del Dashboard</h2>
    <p>Resumen general de métricas y estadísticas</p>
    
    <div class="stats-grid">
      <div 
        v-for="stat in stats" 
        :key="stat.label"
        class="stat-card"
      >
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { icon: '👥', label: 'Usuarios', value: '1,234' },
  { icon: '💰', label: 'Ventas', value: '$45,678' },
  { icon: '📦', label: 'Productos', value: '89' },
  { icon: '📈', label: 'Crecimiento', value: '+23%' }
])
</script>

<style scoped>
.overview h2 {
  color: #333;
  margin-bottom: 10px;
}

.overview p {
  color: #666;
  margin-bottom: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, #317e4f, #c3cfe2);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 2em;
  font-weight: bold;
  color: #01ff80;
}
</style>