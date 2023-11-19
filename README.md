# exec-terraform

Action that supress the complexity to execute commands in Terraform, you will only know what command you want and this action will provide your Infrastructure as Code.

| variable | required | default | description |
|----------|----------|---------|-------------|
|terraform-cmd|false  | plan    |The Terraform command to run (e.g. "plan", "apply", "destroy", etc.)|
|terraform-args|false | -var-file=terraform.tfvars | The Terraform arguments to pass to the command (e.g. "-var-file=terraform.tfvars")|
|terraform-init-args|false|-input=false|The Terraform arguments to pass to the init command (e.g. "-input=false")|

__Note:__ You will need to install the commands in your workflow to use some technologies, like __terraform__. Bellow an example when use terraform command.

````yml
on:
  push:
    branches:
      - main

jobs:
  terraform-exec:
    runs-on: ubuntu-latest
    steps:
      - name: Install Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install Terraform
        uses: hashicorp/setup-terraform@v1
        with:
          terraform_version: 0.14.7
      - name: Checkout
        uses: actions/checkout@v3
        with:
          path: .github/actions/exec-terraform
      - name: Deploy AWS
        uses: ./.github/actions/exec-terraform
        with:
          terraform-cmd: 'plan'
          terraform-args: ''
          terraform-init-args: ''




