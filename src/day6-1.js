
const bufA = Buffer.from([0])
const bufB = Buffer.from([3])
const bufC = Buffer.from([2])
const bufD = Buffer.from([6])

const bufs = [bufA, bufB, bufC, bufD]

bufs.sort((a, b) => a.compare(b))
 
console.log(bufs)

console.log(__dirname, __filename)

process.stdin.setEncoding('utf-8')
process.stdin.on('data', (data) => {
  console.log(data, data.length)
})

process.stdin.pipe(process.stdout)