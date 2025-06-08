const core = require('@actions/core');
const github = require('@actions/github');

try {
  const eventType = github.context.eventName;
  let environmentName;
  let currentBranch;

  switch (eventType) {
    case 'push':
      currentBranch = github.context.payload.ref.replace('refs/heads/', '');
      if (currentBranch === 'main') {
        environmentName = 'production';
      } else if (currentBranch === 'development') {
        environmentName = 'development';
      } else {
        core.setFailed(`Unsupported branch: ${currentBranch}`);
        return;
      }
      break;
    case 'workflow_dispatch':
      currentBranch = github.context.payload.ref.replace('refs/heads/', '');  
      if (currentBranch === 'main') {
        environmentName = 'production';
      } else if (currentBranch === 'development') {
        environmentName = 'development';
      } else {
        core.setFailed(`Unsupported branch: ${currentBranch}`);
        return;
      }
      break;
    default:
      core.setFailed(`Unsupported event type: ${eventType}`);
      return;
  }

  core.setOutput('environment_name', environmentName);
} catch (error) {
  core.setFailed(error.message);
}
