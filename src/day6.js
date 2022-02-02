// @ts-check

// require

const { path, paths, filename} = module

console.log({
  path,
  paths,
  filename,
})

console.log(require('./animals.js'))

// CommonJS : require
// ESMA script : import

const animalsA = require('./animals.js')
const animalsB = require('./animals.js')
const animalsC = require('./animals.js')

console.log(animalsA, animalsB, animalsC)

console.log(animalsA === animalsB)
console.log(animalsA === animalsC)