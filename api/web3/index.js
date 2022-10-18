import { project, initIssue } from './smartcontracts';

export async function getIssueAddress(id) {
  const issueAddress = await project.methods.getIssue(id).call();
  return issueAddress;
}

export async function getIssueBounty(address) {
  const issue = initIssue(address);
  const bounty = await issue.methods.getBounty().call();
  return bounty;
}

export async function addBounty(address, bounty, coinbase) {
  const issue = initIssue(address);
  console.log('0000');
  console.log(coinbase);
  const result = await issue.methods
    .addBounty(bounty)
    .send({ from: coinbase, value: bounty });
  return result;
}
