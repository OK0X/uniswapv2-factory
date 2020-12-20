const UniswapV2Factory = artifacts.require("UniswapV2Factory");

contract('UniswapV2Factory', (accounts) => {
  console.log(accounts)
  it('setter is right',async () =>{
    const accountOne = '0xC8b7a5561e29E7Cf36ed970cc73D9E37da3EB823';
    const metaCoinInstance = await UniswapV2Factory.deployed();
    const feeToSetter=await metaCoinInstance.feeToSetter.call();
    assert.equal(feeToSetter, accountOne, "setter is right");
  })

  //getPair
  it('pair is right',async () =>{
    // const accountOne = '0xC8b7a5561e29E7Cf36ed970cc73D9E37da3EB823';
    const metaCoinInstance = await UniswapV2Factory.deployed();
    const pair=await metaCoinInstance.getPair.call('0x24564639ef1615887f23fefb2265289220894139','0x2c3af037312ab82a367799c27e3d4e7263c0f04d');
    assert.equal(pair, '0xC556aDEf218Fa049adf41CE08F16Dd9b7408Be65', "pair is right");
  })
});
