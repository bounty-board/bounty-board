const express = require('express');
const { Octokit } = require("@octokit/core");

const app = express();

const octokit = new Octokit()

app.get('/issues', async (req, res) => {
	const issues = await octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: req.query.owner,
  	repo: req.query.repo
	})
	res.send(issues);
});

export default {
  path: '/api',
  handler: app,
};
