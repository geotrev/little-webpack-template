# Little Webpack Template
LWT is a starter kit for new React projects. The setup isn't perfect but it's enough to get going fast and with some semblance of confidence that you can build and deploy simple websites. The project favors customization rather than convention in order to provide the most flexibility.

See this simple site example at https://george-lwt.herokuapp.com

The ethos for this project is to explore useful starting points for new projects and understand webpack's many offerings.

### Features/Options
- React + React Router 4 (DOM)
- SCSS + autoprefixing
- Development source maps enabled
- Production build is minified + gzipped
- Mocha/chai-enzyme for unit tests
- Deploys to Heroku

### Clone and set up with Yarn
```shell
$ brew install yarn
$ git clone git@github.com:geotrev/little-webpack-template.git
$ cd little-webpack-template/
$ yarn install
```

### Run the dev server
```shell
$ yarn watch
```

### Make production builds
```shell
$ yarn build
```

### Run tests with istanbul coverage
```shell
$ yarn test
```

### Load tests on each file save/refresh
```shell
$ yarn test:w
```

### Deploy to Heroku
```shell
$ heroku login
...
$ heroku create REPO_NAME
...
$ git push heroku master
...
$ heroku open
```
