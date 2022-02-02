const fs = require('fs')

const rs = fs.createReadStream('../local/jsons', {
  encoding: 'utf-8',
  highWaterMark: 14,
})

let totalSum = 0;
let accumulatedJsonStr = ''

rs.on('data', (chunk) => {
  console.log('Event: data', chunk)

  if (typeof chunk !== 'string') {
    return
  }

  accumulatedJsonStr += chunk
  const lastNewlineIdx = accumulatedJsonStr.lastIndexOf('\n')
  console.log('lastNewlineIdx ', lastNewlineIdx)

  const jsonLinesStr = accumulatedJsonStr.substring(0, lastNewlineIdx)
  accumulatedJsonStr = accumulatedJsonStr.substring(lastNewlineIdx)

  console.log('accumulatedJsonStr ', accumulatedJsonStr)
  console.log('jsonLinesStr ', jsonLinesStr)

  totalSum += jsonLinesStr
    .split('\n')
    .map((jsonLine) => {
      try {
        return JSON.parse(jsonLine)
      } catch (e) {
        return undefined
      }
    })
    .filter(json => json)
    .map((json) => json.data)
    .reduce((sum, curr) => sum + curr, 0)
  console.log('totalSum ', totalSum)
})
rs.on('end', () => {
  console.log('Event: end ')
  console.log('totalSum: ', totalSum)
})