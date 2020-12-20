const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Factory,'0xC8b7a5561e29E7Cf36ed970cc73D9E37da3EB823');
};
