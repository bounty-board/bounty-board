import { project, initIssue } from './smartcontracts';

export async function getIssue() {
  const issueAddress = await project.methods.getIssue('1410376581').call();
  return issueAddress;
}

export async function getIssueBounty(address) {
  const issue = initIssue(address);
  const bounty = await issue.methods.getBounty().call();
  return bounty;
}
