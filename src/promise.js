new Promise((resolve, rejects) => {
  console.log('Inside promise')
  setTimeout(() => {
    resolve(Math.random())
    console.log('After resolve')
  }, 1000)
}).then((value) => {
  console.log('then 1')
  console.log('value :', value)
}).then((value) => {
  console.log('then 2')
  console.log('value :', value)
}).then((value) => {
  console.log('then 3')
  console.log('value :', value)
})