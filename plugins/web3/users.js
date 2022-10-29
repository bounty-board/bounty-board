import users from '~/assets/abi/Users.json';

export default ({ app }, inject) => {
  let _usersAddress = null;

  // Get an instance of the project contract with a given address
  inject('usersContract', async () => {
    const web3 = await app.$web3();
    return new web3.eth.Contract(users.abi, _usersAddress);
  });

  // Get an instance of the project contract with the set address
  inject('usersContractView', async () => {
    const web3View = await app.$web3View();
    return new web3View.eth.Contract(users.abi, _usersAddress);
  });
};
