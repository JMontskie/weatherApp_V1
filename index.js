/* 

#STEPS IN INSTALLING EXPRESS\
mkdir myapp
cd myapp
create repository
npm init
npm install express
add .gitignore 
API Key: d11ad36670c0f4b231fba9ccab154fda
API Endpoint: https://api.openweathermap.org/data/2.5/weather?q=manila&unit=metric&appid=d11ad36670c0f4b231fba9ccab154fda

*/

/* 
const https = require('node:https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
}); 
*/


const express = require('express');
const app = express();
const https = require('node:https');
const port = 3000;


app.get('/', (req, res) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=manila&unit=metric&appid=d11ad36670c0f4b231fba9ccab154fda';

  https.get(url, (response) => {
    //console.log(response);
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);
    console.log(response.headers);
    response.on('data', function (data) {
      console.log(data);
    });
  });

  res.send('Server is now running!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});