import project from '~/assets/abi/Project.json';

export default ({ app }, inject) => {
  let _project;
  let _projectAddress;

  // Set the address of the project contract
  // This is a temporary solution, will be replaced with
  // a more robust solution in the future
  inject('setProjectAddress', (projectAddress) => {
    _projectAddress = projectAddress;
  });

  // Get an instance of the project contract with the set address
  inject('projectContractView', async () => {
    if (!_project) {
      const web3View = await app.$web3View();
      _project = new web3View.eth.Contract(project.abi, _projectAddress);
    }
    return _project;
  });

  // Get the address of an issue through the issueId
  // from the selected project contract
  inject('getIssueAddress', async (id) => {
    const project = await app.$projectContractView();
    const issueAddress = await project.methods.getIssue(id).call();
    return issueAddress;
  });

  //
  // inject('getBounty', async (issueAddress) => {
  //   const issue = await app.$issueContractView(issueAddress);
  //   const bounty = await issue.methods.getBounty().call();
  //   return bounty;
  // });
};
