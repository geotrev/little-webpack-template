[![devDependencies Status](https://david-dm.org/geotrev/pulsar/dev-status.svg)](https://david-dm.org/geotrev/pulsar) [![CircleCI](https://circleci.com/gh/geotrev/pulsar/tree/master.svg?style=svg)](https://circleci.com/gh/geotrev/pulsar/tree/master)

# Pulsar
Pulsar is a starter kit for new React projects. The setup uses Webpack to hit the ground running and with some semblance of confidence that you can build and deploy multi-page websites.

It includes a simple two page boilerplate to get started.

## Features/Options
- React + React Router 4 (DOM)
- SCSS + autoprefixing
- Development source maps enabled
- Production build is minified + gzipped
- Mocha/chai-enzyme for unit tests
- Deploys to Heroku

### Clone and set up with Yarn
```shell
$ git clone git@github.com:geotrev/pulsar.git PROJECT_NAME
$ cd PROJECT_NAME
$ npm install
```

### Run the dev server
```shell
$ npm run watch
```

### Make production builds
```shell
$ npm run build
```

### Run tests with istanbul coverage
```shell
$ npm test
```

### Load tests on each file save/refresh
```shell
$ npm run test:w
```

### Deploy to Heroku
```shell
$ heroku login
# if you don't have an account, one is created for you
$ heroku create REPO_NAME
$ heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
$ git push heroku master
$ heroku open
```
