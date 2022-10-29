import walletCheck from '~/assets/abi/WalletCheck.json';

export default ({ app }, inject) => {
  let _walletCheckAddress = process.env.WALLET_CHECK_ADDRESS;

  // Get an instance of the project contract with a given address
  inject('walletCheckContract', async () => {
    const web3 = await app.$web3();
    return new web3.eth.Contract(walletCheck.abi, _walletCheckAddress);
  });

  // Get an instance of the project contract with the set address
  inject('walletCheckContractView', async () => {
    const web3View = await app.$web3View();
    return new web3View.eth.Contract(walletCheck.abi, _walletCheckAddress);
  });

  // Add a username to the user contract
  inject('addUser', async (username) => {
    const walletCheck = await app.$walletCheckContract();

    await walletCheck.methods
      .requestWalletAddress(username)
      .send({ from: app.$coinbase() });
  });
};
