import issue from '~/assets/abi/Issue.json';

export default ({ app }, inject) => {
  // Get an instance of the issue contract with a given address
  inject('issueContract', async (contractAddress) => {
    const web3 = await app.$web3();
    return new web3.eth.Contract(issue.abi, contractAddress);
  });

  // Get an instance of the issue contract with a given address
  // This is a read-only web3 instance, doesn't require user to be logged in
  inject('issueContractView', async (contractAddress) => {
    const web3View = await app.$web3View();
    return new web3View.eth.Contract(issue.abi, contractAddress);
  });

  // Add a bounty to an issue through the contractAddress
  inject('addBounty', async (contractAddress, bounty) => {
    // Get an instance of the issue contract and the coinbase address
    const contract = await app.$issueContract(contractAddress);
    const coinbase = await app.$coinbase();

    // Add the bounty to the issue on the blockchain
    const result = await contract.methods
      .addBounty(bounty)
      .send({ from: coinbase, value: bounty });
    return result;
  });

  inject('getBounty', async (contractAddress) => {
    // Get an instance of the issue contract read-only and the coinbase address
    const issue = await app.$issueContractView(contractAddress);
    const bounty = await issue.methods.getBounty().call();
    return bounty;
  });
};
