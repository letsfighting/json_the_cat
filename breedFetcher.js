const request = require("request");

let breed = process.argv;

breed = breed.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    //console.log("error:", error); // Print the error if one occurred
    //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    //console.log("body:", body); // Print the HTML for the Google homepage.

    const data = JSON.parse(body);
    //console.log(response);

    if (data[0] === undefined) {
      console.log("Breed was not found");
    } else {
      console.log(data[0]["description"]);
    }

    /*fs.writeFile("samplefile.txt", data, function (err) {
      if (err) throw err;
      console.log("It's saved!");
    });*/
  }
);
