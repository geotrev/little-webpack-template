![Undernet](bin/github-icon.png?raw=true)

[![devDependencies Status](https://david-dm.org/geotrev/pulsar/dev-status.svg)](https://david-dm.org/geotrev/pulsar) [![CircleCI](https://circleci.com/gh/geotrev/pulsar/tree/master.svg?style=svg)](https://circleci.com/gh/geotrev/pulsar/tree/master)

# Pulsar

Pulsar is a Webpack + React starter kit for single-page web applications.

## In the box

- React + React Router 4 (DOM)
- SCSS + autoprefixing
- Production build is minified + gzipped
- Polyfills delivered only on non-modern browsers
- Jest for unit tests
- Deploys to Netlify

### Clone and set up

```sh
$ git clone git@github.com:geotrev/pulsar.git PROJECT_NAME
$ cd PROJECT_NAME
$ rm -rf .git
$ git init
```

Then install dependencies:

```sh
# Use npm
$ npm install
# or yarn
$ yarn install
```

## Create your app manifest, browserconfig, and app icons!

Visit [favicon-generator.org](https://www.favicon-generator.org) to create your various device-specific assets. Add the icons to `public/static/` and the `manifest.json` + `browserconfig.xml` to `public/` alongside the main `index.html` file.

## Running the app

There's just a few scripts you need to run locally, build production assets, and run tests.

### Run dev server

```sh
$ npm run watch
```

### Make production builds

```sh
$ npm run build
```

### Run Jest tests

```sh
$ npm test
```

### Watch tests on file save

```sh
$ npm run test:watch
```

### Deploy to Netlify

- Go to netlify.com/
- Log in via GitHub or GitLab (only works with these two), or make an account and link your vendor of choice
- Select your pulsar repo
- Add "npm run build" as build script
- Add "build" as the publish directory
- Configure for auto-deploys from master if you'd like
- Configure a netlify.tml if you want more customization
- ???
- Profit
