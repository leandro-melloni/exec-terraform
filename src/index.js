import * as core from '@actions/core';
import * as inputs from './modules/inputs.js';
import * as terraform from './modules/terraform.js';

async function run() {
  // Get inputs
  const { 
    terraformCMD, terraformArgs, terrarformInitArgs, 
  } = await inputs.getInputs();

  const result = await terraform.invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs);
  
  try {
    console.log(result)
  }
  catch (error) {
    console.log(error)
    core.setFailed(result);
  }
}

run();
