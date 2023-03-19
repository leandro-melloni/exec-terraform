const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs) {
  let result;
  try {
    result = await exec('terraform init' + ' ' + terrarformInitArgs);
    
    stdout, stderr = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
    console.log(stdout);
    if (stderr != null) {
      console.log(stderr);
    }
      
  }catch (err) {
      result = err;
  }
  return result;
}