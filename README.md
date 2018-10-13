![Undernet](github-icon.png?raw=true)

[![devDependencies Status](https://david-dm.org/geotrev/pulsar/dev-status.svg)](https://david-dm.org/geotrev/pulsar) [![CircleCI](https://circleci.com/gh/geotrev/pulsar/tree/master.svg?style=svg)](https://circleci.com/gh/geotrev/pulsar/tree/master)

# Pulsar
Pulsar is a webpack-powered React starter kit for web apps.

## In the box
- React + React Router 4 (DOM)
- SCSS + autoprefixing
- Production build is minified + gzipped
- Mocha/chai-enzyme for unit tests
- Deploys to Heroku

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
$ npm run test:w
```

### Deploy to Heroku
```sh
$ heroku login
# if you don't have an account, you'll be prompted to create one
$ heroku create REPO_NAME
$ heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
$ git push heroku master
$ heroku open
```
