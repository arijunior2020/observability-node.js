const express = require('express');
const promClient = require('prom-client');

const app = express();

const collectDefaultMetrics = promClient.collectDefaultMetrics;

// Crie um contador para acompanhar o número de solicitações ativas
const activeRequestsCounter = new promClient.Counter({
  name: 'app_nodejs_active_requests_total',
  help: 'Total number of active requests in the Node.js application',
});

collectDefaultMetrics({ prefix: 'app:' });

// Função assíncrona para gerar métricas
async function generateMetrics() {
  try {
    const metrics = await promClient.register.metrics(); // Espera a Promise ser resolvida
    return metrics;
  } catch (error) {
    console.error('Error generating metrics:', error);
    throw new Error('Failed to generate metrics');
  }
}

// Rota para endpoint /metrics
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await generateMetrics(); // Espera a Promise ser resolvida
    res.set('Content-Type', promClient.register.contentType);
    res.end(metrics);
  } catch (error) {
    console.error('Error handling /metrics request:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Rota padrão
app.get('/', (req, res) => {
  // Incremente o contador de solicitações ativas ao receber uma nova solicitação
  activeRequestsCounter.inc();
  
  res.send('APRESENTAÇÃO OBSERVABILIDADE COM PROMETHEUS E GRAFANA');
});

// Middleware para decrementar o contador de solicitações ativas ao concluir uma solicitação
app.use((req, res, next) => {
  // Decrementar o contador de solicitações ativas
  activeRequestsCounter.dec();
  next();
});

// Inicia o servidor na porta 5000
app.listen(5000, () => {
  console.log('App listening on port 5000');
});
