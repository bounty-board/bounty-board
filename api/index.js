const express = require('express');
const { Octokit } = require('@octokit/core');

import { getIssue, getIssueBounty } from './web3';

const octokit = new Octokit();
const app = express();

app.get('/issues', async (req, res) => {
  try {
    const issues = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: req.query.owner,
      repo: req.query.repo,
    });

    res.send(issues);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get('/web3/issue', async (req, res) => {
  try {
    const issue = await getIssue();
    res.send(issue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get('/web3/issue/bounty/:address', async (req, res) => {
  try {
    console.log(req.query.address);
    // const address = req.params.address;
    const address = '0x0696Dfe0608a3F652db98bA7936FcE6b8EB75d53';
    const bounty = await getIssueBounty(address);
    res.send(bounty);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default {
  path: '/api',
  handler: app,
};
