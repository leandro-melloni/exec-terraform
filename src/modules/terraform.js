const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function invokeTerraform(terraformCMD, terraformArgs, terrarformInitArgs) {
  try {
    const init = await exec('terraform init' + terrarformInitArgs);
    console.log(init);
    const { stdout, stderr } = await exec('terraform ' + terraformCMD + ' ' + terraformArgs);
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
