const { Octokit } = require('octokit');
const core = require('@actions/core');
const github = require('@actions/github');

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {

  const input = core.getInput('test');
  console.log('${input}');
  app.log.info("Yay, the app was loaded!");
  
}
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

