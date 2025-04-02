const { log } = require('console');

const urlString = "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

// Use the modern URL class
const urlObject = new URL(urlString);

console.log(`Protocol: ${urlObject.protocol}`);
console.log(`Host name: ${urlObject.hostname}`);
console.log(`Path name: ${urlObject.pathname}`);
console.log(`Query name: ${urlObject.searchParams.toString()}`);

// Example to iterate through query parameters
urlObject.searchParams.forEach((value, key) => {
  console.log(`Query Key: ${key}, Query Value: ${value}`);
});