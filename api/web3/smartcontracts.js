const Web3 = require('web3');
const Project = require('./abi/Project.json');
const Issue = require('./abi/Issue.json');

const web3 = new Web3(
  'https://eth-goerli.g.alchemy.com/v2/UONWDOWpkQCu_nJ-GIlbDUJFHaIpSVwL'
);

// General function to get contract instance
const initContract = (abi, address) => {
  return new web3.eth.Contract(abi, address);
};

// Get issue instance
// This is abstracted because we need to get
// a general contract instance from a specific
// contract address
export const initIssue = (address) => {
  return initContract(Issue.abi, address);
};

export const project = initContract(
  Project.abi,
  '0x14465931a3b197746da59487D0172D064941F805'
);
