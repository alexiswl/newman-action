const core = require('@actions/core')
const newman = require('newman')
const util = require('util')

init()

async function init () {
  try {
    const get = core.getInput

    console.log(util.inspect(get))	   

    const options = {
      collection: get('collection'),
      environment: JSON.parse(get('environment'))
    }

    runNewman(options)
  } catch (error) {
    console.log("FAILED")
    core.setFailed(error.message)
  }
}

function runNewman (options) {
  newman.run({
    collection: options.collection,
    environment: options.environment,
    reporters: ['cli']
  }, process.exit)
}
