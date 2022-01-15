// @ts-check
// Formating, Linting, Type Checking
// Formating: Prettier
// Linting: ESLint
// Type checking: TypeScript

const http = require('http')
const server = http.createServer((req, res) => {
  res.statuscode = '뮻'
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log('The server is listening at port: ${PORT}.')
})