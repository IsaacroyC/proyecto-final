<template>
  <div class="stats">
    <h2>📊 Matriculas</h2>
    <p>Ingreso de matriculas</p>
    
    <div class="charts-container">
      <div class="chart-card">
        <h3>📈 Ventas Mensuales</h3>
        <div class="chart-placeholder">
          <div class="bars">
            <div 
              v-for="(bar, index) in chartData" 
              :key="index"
              class="bar"
              :style="{ height: bar + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>👥 Usuarios Activos</h3>
        <div class="metric-list">
          <div 
            v-for="metric in metrics" 
            :key="metric.name"
            class="metric-item"
          >
            <span>{{ metric.name }}</span>
            <strong>{{ metric.value }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chartData = ref([65, 78, 90, 81, 56, 72, 88])

const metrics = ref([
  { name: 'Usuarios hoy', value: '432' },
  { name: 'Usuarios esta semana', value: '2,847' },
  { name: 'Usuarios este mes', value: '12,934' },
  { name: 'Tasa de retención', value: '87%' }
])
</script>

<style scoped>
.stats h2 {
  color: #333;
  margin-bottom: 10px;
}

.stats p {
  color: #666;
  margin-bottom: 30px;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.chart-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.chart-card h3 {
  color: #667eea;
  margin-bottom: 20px;
}

.chart-placeholder {
  height: 200px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: flex-end;
}

.bars {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  align-items: flex-end;
}

.bar {
  flex: 1;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 4px 4px 0 0;
  transition: all 0.3s;
}

.bar:hover {
  opacity: 0.8;
}

.metric-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.metric-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.metric-item strong {
  color: #667eea;
  font-size: 1.2em;
}
</style>