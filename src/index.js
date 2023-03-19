import * as core from '@actions/core';
import * as inputs from './modules/inputs.js';
import * as terraform from './modules/terraform.js';

async function run() {
  // Get inputs
  const { 
    terraformCMD, terraformArgs, terrarformInitArgs, 
  } = await inputs.getInputs();

  let resultInit;
  let resultCMD;

  
  resultInit = await terraform.invokeTerraformInit(terrarformInitArgs);
  

  resultCMD = await terraform.invokeTerraform(terraformCMD, terraformArgs);
  if (resultCMD.stderr != null) {
    core.error(resultCMD.stderr);
  } else {
    core.notice(resultCMD.stdout)
  }
}

run();
