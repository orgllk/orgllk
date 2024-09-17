// script.js
const githubUsername = 'orgllk';
const githubApiUrl = `https://api.github.com/users/${githubUsername}`;

fetch(githubApiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // display the data on the website
  })
  .catch(error => console.error(error));