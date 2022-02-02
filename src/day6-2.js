// const os = require('os');
// console.log(os.arch(), os.platform(), os.cpus())
//
// const dns = require('dns');
//
// dns.lookup('google.com', (err, address, family) => {
//   console.log(address, family)
// })

const fs = require('fs')
const ws = fs.createWriteStream('big-file')
const NUM_MBYTES = 500

for (let i = 0; i < NUM_MBYTES; i++ ) {
  ws.write('a'.repeat(1024 * 1024))
}

const rs = fs.createReadStream('big-file', {
  encoding: 'utf-8',
  highWaterMark: 65536 * 2,
})

let chunkCount = 0

rs.on('data', (data) => {
  chunkCount++
  console.log('Event: data', data[0])
})
rs.on('end', () => {
  console.log('Event: end')
  console.log('chunkCount: ', chunkCount)
})