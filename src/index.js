import "core-js/features/promise"

const polyfills = []
const modernBrowser = "includes" in Array && "assign" in Object && "forEach" in NodeList.prototype

if (!modernBrowser) {
  polyfills.push(import(/* webpackChunkName: "polyfill" */ "core-js/stable"))
}

Promise.all(polyfills)
  .then(() => import(/* webpackChunkName: "app" */ "./app"))
  .catch(error => {
    throw new Error(`Uh oh! Polyfills couldn't load! ${error}`)
  })
