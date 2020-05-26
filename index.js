const core = require('@actions/core')
const newman = require('newman')

init()

async function init () {
  try {
    const get = core.getInput

    const options = {
      collection: get('collection'),
      environment: get('environment')
    }

    runNewman(options)
  } catch (error) {
    console.log("FAILED")
    core.setFailed(error.message)
  }
}

function runNewman (options) {
  newman.run({
    collection: require(options.collection),
    environment: require(options.environment),
    reporters: ['cli']
  }, process.exit)
}
