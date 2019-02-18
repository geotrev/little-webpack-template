![Undernet](github-icon.png?raw=true)

[![devDependencies Status](https://david-dm.org/geotrev/pulsar/dev-status.svg)](https://david-dm.org/geotrev/pulsar) [![CircleCI](https://circleci.com/gh/geotrev/pulsar/tree/master.svg?style=svg)](https://circleci.com/gh/geotrev/pulsar/tree/master)

# Pulsar
Pulsar is a Webpack + React starter kit for single-page web applications.

## In the box
- React + React Router 4 (DOM)
- SCSS + autoprefixing
- Production build is minified + gzipped
- Mocha/chai-enzyme for unit tests
- Deploys to Netlify

### Clone and set up
```sh
$ git clone git@github.com:geotrev/pulsar.git PROJECT_NAME
$ cd PROJECT_NAME
$ rm -rf .git
$ git init
```

Then install with npm or yarn.
```sh
$ npm install
# or use yarn
$ yarn install
```

### Create your app manifest, browserconfig, and app icons!
Visit [favicon-generator.org](https://www.favicon-generator.org) to create your PWA assets. Add the icons to `public/static/` and the `manifest.json` + `browserconfig.xml` to `public/` alongside the main `index.html` file.

### Run the dev server
```sh
$ npm run watch
```

### Make production builds
```sh
$ npm run build
```

### Run tests with istanbul coverage
```sh
$ npm test
```

### Run tests on each file save
```sh
$ npm run test:watch
```

### Deploy to Netlify
- Go to netlify.com/
- Log in via GitHub or GitLab (only works with these two).
- Select repo using this set up.
- Deploy it
- ????
- Profit
