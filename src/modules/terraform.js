const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs) {
  let resultInit;
  core.info('Invoke Terraform Init');
  try {
    resultInit = await exec('terraform init' + ' ' + terrarformInitArgs);
  }catch (err) {
    resultInit = err;
    core.error(resultInit.stderr);
    core.setFailed(resultInit.message);
  }
  core.saveState('stdout: ', resultInit.stdout);
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
  return resultCMD;
}