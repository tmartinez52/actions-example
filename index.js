const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('name');
  const isOn = core.getBooleanInput('sw');

  console.log(`Hello ${nameToGreet}!`);
  if (sw) {
    console.log("switch is on");
  } else {
    console.log("switch is off");
  }
  core.setOutput("greeting", `Hello ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
