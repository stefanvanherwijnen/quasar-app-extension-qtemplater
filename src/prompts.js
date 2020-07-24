/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *

 */

module.exports = function () {
  return [
    {
      name: 'template',
      type: 'list',
      required: true,
      message: 'Choose the template which you would like to use for the generation of your website.',
      choices: [
        {
          name: 'Small business single Page Application',
          value: 'business-spa',
          short: 'Business SPA'
        }
      ]
    }
  ]
}
