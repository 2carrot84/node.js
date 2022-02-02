const { log, error } = console;
const fs = require("fs");
const stream = require("stream");
const zlib = require("zlib");

stream.pipeline(
  fs.createReadStream("big-file"),
  zlib.createGzip(),
  fs.createWriteStream("big-file.gz"),
  (err) => {
    if (err) {
      error('Pipeline failed', err)
    } else {
      log('Pipeline successed')
    }
  }
);