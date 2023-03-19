const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs) {
  let resultInit;
  try {
    resultInit = await exec('terraform init' + ' ' + terrarformInitArgs);
  }catch (err) {
    resultInit = err;
    core.setFailed(resultInit.message);
  }
  return resultInit;
}

export async function invokeTerraform(terraformCMD, terraformArgs) {
  let resultCMD;
  try {
    resultCMD = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);

  } catch (err) {
    resultCMD = err;
    core.setFailed(resultCMD.stderr);
  }
  return resultCMD;
}