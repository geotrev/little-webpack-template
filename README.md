[![dependencies Status](https://david-dm.org/geotrev/pulsar/status.svg)](https://david-dm.org/geotrev/pulsar)

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
$ npm start
```

### Run the dev server
```shell
$ npm start
```

### Make production builds
```shell
$ npm run build
```

### Run tests with istanbul coverage
```shell
$ npm run test
```

### Load tests on each file save/refresh
```shell
$ npm run test:w
```

### Deploy to Heroku
```shell
$ heroku login
...# prompts you to register if not a current user
$ heroku create REPO_NAME
...
$ git push heroku master
... # takes a moment to complete
$ heroku open
```
