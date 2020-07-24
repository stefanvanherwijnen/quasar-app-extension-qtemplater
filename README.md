# QTemplater
## Create a fully working Quasar website from a single configuration file using a pre-defined template.

A Quasar project with TypeScript and Composition API support is required.

## Usage
1. Create your qtemplater.json file on https://stefanvanherwijnen.github.io/quasar-app-extension-qtemplater/#/ and download it.

2. Create a Quasar project (`quasar create`)

3. Place qtemplater.json in the root of your Quasar app (i.e. where package.json is).

4. Install QTemplater: `quasar ext add qtemplater`

5. Run/build your application (`quasar dev`)

## In development

The app extension is not yet published to npm. To use it, clone the repo and use `yarn link` and `quasar ext invoke qtemplater`.