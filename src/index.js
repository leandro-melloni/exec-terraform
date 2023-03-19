import * as core from '@actions/core';
import * as inputs from './modules/inputs.js';
import * as terraform from './modules/terraform.js';

async function run() {
  // Get inputs
  const { 
    terraformCMD, terraformArgs, terrarformInitArgs, 
  } = await inputs.getInputs();

  let result;

  console.log('Invoke Terraform Init');
  result = await terraform.invokeTerraformInit(terrarformInitArgs);
  core.notice(result);

  console.log('Invoke Terraform ' + terraformCMD);
  result = await terraform.invokeTerraform(terraformCMD, terraformArgs);
  core.notice(result)
}

run();
