const fs = require("fs");
const http = require("http");
const _ = require("lodash");

const server = http.createServer((request, response) => {
  console.log("request made.....");
  //console.log(request.url, request.method);

  //loadash methods
  const randomNumbers = _.random(0, 31);
  console.log(randomNumbers);
  const welcomeGreeting = _.once(() => {
    console.log("Hello, Welcome");
  });
  welcomeGreeting();
  welcomeGreeting();
  welcomeGreeting();

  //set header content type
  response.setHeader("content-type", "text/html");
  let path = "./views/";
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;
    //redirect to /about
    case "/about-me":
      response.statusCode = 301;
      response.setHeader("Location", "./about");
      response.end();
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }

  //Read file
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      response.end();
    } else {
      response.write(data);
      response.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requeat on port 3000....!!!");
});
