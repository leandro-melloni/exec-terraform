import * as util from 'util';
import * as child_process from 'child_process';
import * as core from '@actions/core';

async function invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs) {
  try {
    const exec = util.promisify(child_process.exec);
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
      core.setFailed(err.message);
      throw new Error(err);
  }
}

module.exports = {
  invokeTerraform
};
