const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Ashik\\Documents\\GitHub\\ashiksimon.github.io\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Ashik\\Documents\\GitHub\\ashiksimon.github.io\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Ashik\\Documents\\GitHub\\ashiksimon.github.io\\src\\pages\\page-2.js"))),
  "component---src-pages-yonder-dynamics-arm-js": hot(preferDefault(require("C:\\Users\\Ashik\\Documents\\GitHub\\ashiksimon.github.io\\src\\pages\\yonder-dynamics-arm.js")))
}

