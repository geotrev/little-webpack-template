# Little Webpack Template
LWT is a starter kit for new react/webpack projects. The setup isn't perfect but it's enough to get going fast and with some semblance of confidence that you can build and deploy simple websites. There's none of that "eject" nonsense so you can have full control over your project.

See this simple site example at https://george-lwt.herokuapp.com

## Starter pack for simple one page apps, or deployable to heroku for sites with multiple pages
The ethos for this project was to explore useful starting points for new projects and understand webpack's many offerings.

### Development options/features
- React with React Router v4 for views
- SCSS (with autoprefixer) for styling
- Build and development configurations for deployments and dev builds
- Unit tests with mocha/chai-enzyme
- Deployment compatibility with Heroku

### Clone and set up with Yarn
```shell 
$ brew install yarn
$ git clone git@github.com:gtreviranus/little-webpack-template.git
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

### Deploy with Heroku
```shell
$ heroku login
...
$ heroku create
...
$ git push heroku master
...
$ heroku open
# or
$ open https://some-new-url.herokuapp.com
```
