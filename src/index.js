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

  try {
    core.info('Invoke Terraform Init');
    resultInit = await terraform.invokeTerraformInit(terrarformInitArgs);
    core.notice(resultInit.stdout);
  } catch (error) {
    core.setFailed(error.message);
  }


  core.info('Invoke Terraform ' + terraformCMD);
  resultCMD = await terraform.invokeTerraform(terraformCMD, terraformArgs);
  core.notice(resultCMD.stdout)
}

run();
