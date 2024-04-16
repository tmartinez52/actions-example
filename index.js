const core = require('@actions/core');
const axios = require('axios');


try {
  const response = await axios.get(apiUrl);
  core.setOutput('Response:', response.data);
  } catch (error) {
  core.setFailed('Error:', error);
}
