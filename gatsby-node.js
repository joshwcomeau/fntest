/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { ncp } = require("ncp")

ncp.limit = 16

// You can delete this file if you're not using it
exports.onPostBuild = async () => {
  return new Promise((resolve, reject) => {
    ncp("./functions", "./public/functions", err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
