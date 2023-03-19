const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs) {
  let result;
  try {
    result = await exec('terraform init' + ' ' + terrarformInitArgs);
  }catch (err) {
      result = err;
      core.setFailed(result.message);
  }
  return result;
}

export async function invokeTerraform(terraformCMD, terraformArgs) {
  try {
    sresult = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
    console.log(stdout);
    if (stderr != null) {
      console.log(stderr);
    }
  } catch (err) {
    result = err;
    core.setFailed(result.message);
  }
  return result;
}