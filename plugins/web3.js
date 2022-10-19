import Web3 from 'web3';

export default ({ app }, inject) => {
  let _web3;
  let _web3View;
  let _coinbase;

  // Inject web3 into instance
  inject('web3', async () => {
    // If injected web3 has been read, return it
    if (typeof window.ethereum !== 'undefined' && !_web3) {
      // Get the injected ethereum instance
      const ethereum = window.ethereum;
      _web3 = new Web3(ethereum);
    }
    return _web3;
  });

  // Inject web3View into instance
  // This is a read-only web3 instance, doesn't require user to be logged in
  inject('web3View', () => {
    // If injected web3 has been read, return it
    if (!_web3View) {
      console.log('Injected web3View');
      _web3View = new Web3(
        'https://eth-goerli.g.alchemy.com/v2/UONWDOWpkQCu_nJ-GIlbDUJFHaIpSVwL'
      );
    }

    return _web3View;
  });

  // Get the coinbase address of the user (wallet address)
  inject('coinbase', async (contractAddress) => {
    // If coinbase has been read, return it
    if (!_coinbase) {
      const web3 = await app.$web3();
      _coinbase = await web3.eth.getCoinbase();
    }
    return _coinbase;
  });
};
