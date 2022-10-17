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
