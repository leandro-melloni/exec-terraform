const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs, terraformCMD, terraformArgs) {
  let resultInit;
  core.info('Invoke Terraform Init');
  try {
    resultInit = await exec('terraform init' + ' ' + terrarformInitArgs);
    core.info(resultInit.stdout);
    await invokeTerraform(terraformCMD, terraformArgs);
  }catch (err) {
    resultInit = err;
    core.setFailed(resultInit.message);
  }

  core.info(resultInit.stdout);
  return resultInit;
}

export async function invokeTerraform(terraformCMD, terraformArgs) {
  core.info('Invoke Terraform ' + terraformCMD);
  let resultCMD;
  try {
    resultCMD = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);

  } catch (err) {
    resultCMD = err;
    core.setFailed(resultCMD.stderr);
  }
  core.info(resultCMD.stdout);
  return resultCMD;
}