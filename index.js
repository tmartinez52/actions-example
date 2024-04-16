const core = require('@actions/core');
const axios = require('axios');


async function makeGetRequest(url) {
  try {
      const response = await axios.get(url);
      console.log('Status Code:', response.status);
  } catch (error) {
      core.setFailed('Error:', error);
  }
}

// Call the function to make the GET request
const url = core.getInput('url');
makeGetRequest(url);