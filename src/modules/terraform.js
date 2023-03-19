const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs) {
  let resultInit;
  resultInit = await exec('terraform init' + ' ' + terrarformInitArgs);
  return resultInit;
}

export async function invokeTerraform(terraformCMD, terraformArgs) {
  let resultCMD;
  resultCMD = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
  return resultCMD;
}