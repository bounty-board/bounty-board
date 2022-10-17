const express = require('express');
const { Octokit } = require('@octokit/core');

import { getIssueAddress, getIssueBounty } from './web3';

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
    res.send(issue);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get('/web3/issue/bounty/:id', async (req, res) => {
  try {
    // Get address from id
    const id = req.params.id;
    const address = await getIssueAddress(id);

    // Get the bounty from the address
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
