const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs) {
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
      throw new Error(err);
  }
}

module.exports = {
  invokeTerraform
};
