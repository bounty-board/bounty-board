const express = require('express');
const { Octokit } = require('@octokit/core');

import { getIssueAddress, getIssueBounty, addBounty } from './web3';

const octokit = new Octokit();
const app = express();

// handle json in body
app.use(express.json());

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
    console.log(address);
    // Get the bounty from the address
    const bounty = await getIssueBounty(address);
    res.send({ bounty, address });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.post('/web3/issue/bounty/:id', async (req, res) => {
  try {
    // Get address from id
    const id = req.params.id;
    const address = await getIssueAddress(id);

    const bounty = parseInt(req.body.bounty);
    const coinbase = req.body.coinbase;
    const pending = await addBounty(address, bounty, coinbase);
    console.log(pending);
    res.send(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default {
  path: '/api',
  handler: app,
};
