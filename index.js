const core = require('@actions/core');
const axios = require('axios');


async function makeGetRequest(url) {
  try {
      const response = await axios.get(apiUrl);
      core.setOutput('Response:', response.data);
  } catch (error) {
      core.setFailed('Error:', error);
  }
}

// Call the function to make the GET request
const url = core.getInput('url');
makeGetRequest(url);