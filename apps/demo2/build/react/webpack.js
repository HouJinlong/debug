const nrwlGetWebpackConfig = require("@nrwl/react/plugins/webpack");
function getWebpackConfig(config) {
  let _config = nrwlGetWebpackConfig(config)
  return _config
}
module.exports = getWebpackConfig;
