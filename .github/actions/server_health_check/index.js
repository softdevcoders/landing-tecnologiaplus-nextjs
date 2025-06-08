// const axios = require('axios');

// const url = process.env.HEALTH_CHECK_URL;

// if (!url) {
//   console.error('Error: HEALTH_CHECK_URL environment variable not set.');
//   process.exit(1);
// }

// console.log(`Performing health check on: ${url}`);

// axios.get(url, { timeout: 10000 })
//   .then(response => {
//     if (response.status >= 200 && response.status < 300) {
//       console.log(`✅ Health check successful! Status: ${response.status}`);
//       process.stdout.write('success\n');
//       process.exit(0);
//     } else {
//       console.error(`❌ Health check failed! Status: ${response.status}`);
//       process.stdout.write('failure\n');
//       process.exit(1);
//     }
//   })
//   .catch(error => {
//     console.error('❌ Health check failed with error:', error.message);
//     process.stdout.write('failure\n');
//     process.exit(1);
//   }); 

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

    const response = await axios.get(url, { timeout: 10000 });

    if (response.status >= 200 && response.status < 300) {
      serverStatus = 'success';
    } else {
      serverStatus = 'failure';
    }
  } catch (error) {
    serverStatus = 'failure';
    core.setFailed(`Error during health check: ${error.message}`);
  } finally {
    core.setOutput('server_status', serverStatus);
  }
}

checkServerHealth();
