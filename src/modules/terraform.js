const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraformInit(terrarformInitArgs) {
  let resultInit;
  try {
    resultInit = await exec('terraform init' + ' ' + terrarformInitArgs);
    return resultInit;
  }catch (err) {
      resultInit = err;
      core.setFailed(resultInit.message);
  }
}

export async function invokeTerraform(terraformCMD, terraformArgs) {
  let resultCMD;
  try {
    resultCMD = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
    return resultCMD;
  } catch (err) {
    resultCMD = err;
    core.setFailed(resultCMD.message);
    throw new Error(resultCMD.message);
  }

}