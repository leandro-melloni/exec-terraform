import * as core from '@actions/core';

export async function getInputs() {
    try {
        // Get inputs
        const terraformCMD = core.getInput('terraform-cmd', { required: false }).toLowerCase();
        const terraformArgs = core.getInput('terraform-args', {required: false }).toLowerCase();
        const terrarformInitArgs = core.getInput('terrarform-init-args', {required: false }).toLowerCase();

        return {
            terraformCMD,
            terraformArgs,
            terrarformInitArgs
        };
    } catch (error) {
        core.setFailed(error.message);
    }
}