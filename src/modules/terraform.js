const util = require('util');
const exec = util.promisify(require('child_process').exec);
import * as core from '@actions/core';

export async function invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs) {
  try {
    let { stdout,stderr } = await exec('terraform init' + ' ' + terrarformInitArgs);
    console.log(stdout);
    if (stderr != null) {
      console.log(stderr);
    }
    stdout, stderr = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
    console.log(stdout);
    if (stderr != null) {
      console.log(stderr);
    }
      
    return stdout;
  }catch (err) {
      console.error('Error invoking Terraform');
      core.setFailed(err.message);
      throw new Error(err);
  }
}