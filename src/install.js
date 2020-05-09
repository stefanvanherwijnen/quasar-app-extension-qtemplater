/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */
const fs = require('fs')
const stripHtml = require("string-strip-html");
const { execSync } = require('child_process');

module.exports = function (api) {
  let configuration
  if (api.hasExtension('@quasar/qmarkdown')) {
    if (!fs.existsSync(api.resolve.app('configuration.json'))) {
      // Not so nice, but only way to prevent a "successful" install?
      throw Error('Please place a configuration.json in the root of your app folder')
    } else {
      const file = fs.readFileSync(api.resolve.app('configuration.json'), 'utf8')
      configuration = JSON.parse(file)
    }
    if (!fs.existsSync(api.resolve.app('icon.png'))) {
      throw Error('Please place an icon.png in the root of your app folder')
    }

    for (let page of configuration.pages) {
      api.renderFile(`./templates/markdown/${api.prompts.template}.vue`, `src/pages/${page.name}.vue`, {
        page: page,
        website: configuration.website
      })
    }
    api.render(`./templates/${api.prompts.template}`, {
      website: configuration.website,
      css: configuration.css,
      landingPage: configuration.landingPage,
      pages: configuration.pages,
      about: configuration.about,
      contact: configuration.contact,
      route: configuration.route
    })

    // Possibility for searching the contents of the pages
    // const pagesPath = api.resolve.src('pages')
    // const filenames = fs.readdirSync(pagesPath)
    // for (let filename of filenames) {
    //   const file = fs.readFileSync(`${pagesPath}/${filename}`, 'utf-8')
    //   const start = file.indexOf('<template>') + 10
    //   const end = file.indexOf('</template>')
    //   const content = stripHtml(file.substring(start, end))
    //   console.log(content)
    // }
    try {
      console.log('Running \'icongenie generate -m spa -i icon.png\'')
      const execResult = execSync('icongenie generate -m spa -i icon.png')
    } catch (e) {

    }
  } else {
    console.log('Please instal QMarkdown first')
    console.log('quasar ext add @quasar/qmarkdown')
  }
}
