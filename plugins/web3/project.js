import project from '~/assets/abi/Project.json';

export default ({ app }, inject) => {
  let _projectAddress;

  // Set the address of the project contract
  // This is a temporary solution, will be replaced with
  // a more robust solution in the future
  inject('setProjectAddress', (projectAddress) => {
    _projectAddress = projectAddress;
  });

  // Get an instance of the project contract with a given address
  inject('projectContract', async () => {
    const web3 = await app.$web3();
    return new web3.eth.Contract(project.abi, _projectAddress);
  });

  // Get an instance of the project contract with the set address
  inject('projectContractView', async () => {
    const web3View = await app.$web3View();
    return new web3View.eth.Contract(project.abi, _projectAddress);
  });

  // Get the address of an issue through the issueId
  // from the selected project contract
  inject('getIssueAddress', async (id) => {
    const project = await app.$projectContractView();
    const issueAddress = await project.methods.getIssue(id).call();
    return issueAddress;
  });

  inject('createIssue', async (id) => {
    const project = await app.$projectContract();
    const coinbase = await app.$coinbase();
    console.log('----');
    console.log(coinbase);
    const result = await project.methods
      .createIssue(id)
      .send({ from: coinbase });
    return result;
  });
};
