const core = require('@actions/core');
const axios = require('axios');

async function checkServerHealth() {
  let serverStatus;
  
  try {
    const url = process.env.HEALTH_CHECK_URL;

    if (!url) {
      core.setFailed('Error: HEALTH_CHECK_URL environment variable not set.');
      return; 
    }

    core.info(`Attempting to check server health at URL: ${url}`);
    const response = await axios.get(url, { timeout: 10000 });

    if (response.status >= 200 && response.status < 300) {
      serverStatus = 'success';
      core.info(`Server health check successful: ${serverStatus}`);
    } else {
      serverStatus = 'failure';
      core.warning(`Server health check failed: ${serverStatus}`);
    }
  } catch (error) {
    serverStatus = 'failure';
    core.setFailed(`Error during health check: ${error.message}`);
    core.error(`Health check error: ${error.message}`);
  } finally {
    core.setOutput('server_status', serverStatus);
    core.info(`Server health check completed with status: ${serverStatus}`);
  }
}

checkServerHealth();
