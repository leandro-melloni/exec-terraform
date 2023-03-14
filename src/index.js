import * as core from '@actions/core';
import * as inputs from './modules/inputs.js';
import * as terraform from './modules/terraform.js';

async function run() {
  try {
    // Get inputs
    const { 
      terraformCMD, terraformArgs, terrarformInitArgs, 
    } = await inputs.getInputs();

    await terraform.invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs);
    
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
