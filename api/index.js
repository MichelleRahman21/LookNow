const createServer = require('http').createServer;
const url = require('url');
const axios = require('axios');
const chalk = require('chalk');
const config = require('./config');


const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET'
};
// Helper functions
const decodedParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({...acc, [key]: searchParams.get(key)}), {});
// Create the functions for the server to request and respond to those requests.
  const  server = createServer((req, res) => {
  const requestURL = url.parse(req.url);
  const decodedParams = decodedParams(new URLSearchParams(requestURL.search));
  // Change the country param accordingly to the location you want to look for, example; London = 'gb'
  const { search, location, country = 'us'} = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&what=${search}&where=${location}`;
// Sending that information to Axios
  if (req.method === 'GET') {
    console.log(chalk.green('Proxy GET request to: ${targetURL}'));
    // send the request to axios
    axios.get(targetURL)
        .then(response => {
          res.writeHead(200, headers);
          // it holds the info back from Adzuna
          res.end(JSON.stringify(repsonse.data));
        })
        .catch(error => {
           console.log(chalk.red(error));
           res.writeHead(500, headers);
           res.end(JSON.stringify(error))
        });
    }
});
// set the server listening
server.listen(3000, () => {
  console.log(chalk.green('Server Listening'));
})
