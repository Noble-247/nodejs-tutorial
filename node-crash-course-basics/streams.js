const fs = require("fs");

//INITIATE READING A LARGE FILE
const readStream = fs.createReadStream("./docs/blog1.txt", {
  encoding: "utf-8",
});
//INITIATE WRITING A LARGE FILE
const writeStream = fs.createWriteStream("./docs/blog2.txt");

/* readStream.on("data", (chunk) => {
  console.log("....New Chunk.....");
  console.log(chunk);

  //console.log(chunk.toString());

  //write the stream
  writeStream.write("\nNEW Chunk\n");
  writeStream.write(chunk);
});
 */

//USING PIPING METHOD
readStream.pipe(writeStream);
