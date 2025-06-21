const core = require('@actions/core');
const axios = require('axios');
const axiosRetry = require('axios-retry').default;

// Configuración de reintentos: hasta 4 intentos con back-off exponencial.
axiosRetry(axios, {
  retries: 4,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    const status = error?.response?.status;
    // Reintenta si no hay respuesta (timeout/network) o en códigos temporales comunes
    return !error.response || [403, 429, 502, 503, 504].includes(status);
  },
});

async function checkServerHealth() {
  let serverStatus;

  const url = process.env.HEALTH_CHECK_URL;
  if (!url) {
    core.setFailed('Error: HEALTH_CHECK_URL environment variable not set.');
    return;
  }

  try {
    core.info(`Attempting to check server health at URL: ${url}`);
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'GitHubHealthCheck/1.0 (+https://github.com/softdevcoders/landing-tecnologiaplus-nextjs)',
        Accept: 'application/json, text/plain;q=0.9',
      },
      // Acepta como éxito cualquier 2xx o 3xx (p. ej. redirecciones 301/302)
      validateStatus: (status) => status >= 200 && status < 400,
    });

    serverStatus = 'success';
    core.info(`Server health check successful with status: ${response.status}`);
  } catch (error) {
    serverStatus = 'failure';
    const status = error?.response?.status || 'NO_RESPONSE';
    core.warning(`Health check failed (status: ${status}) – ${error.message}`);
    core.setFailed('Health check failed after retries.');
  } finally {
    core.setOutput('server_status', serverStatus);
    core.info(`Server health check completed with status: ${serverStatus}`);
  }
}

checkServerHealth();