const request = require("request");

const fetchBreedDescription = (breed, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", body); // Print the HTML for the Google homepage.

      if (error) {
        callback(error, null);
        return;
      }

      const data = JSON.parse(body);

      if (data[0] === undefined) {
        callback("Breed was not found", null);
        return;
      } else {
        callback(null, data[0]["description"]);
        return;
      }
    }
  );
};

module.exports = { fetchBreedDescription };
