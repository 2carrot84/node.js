// @ts-check
// const sleep = (ms) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms)
//     })
// }
//
// const promise = new Promise((resolve, rejects) => {
//     console.log('Inside promise1')
//     sleep(1000)
//     rejects(new Error('First reject1'))
//     resolve('First resolve1')
// }).then(value => {
//     console.log('Inside first then1')
//     console.log('value', value)
// }).catch(error => {
//     console.log('error', error)
// })
//
// const promise2 = new Promise((resolve, rejects) => {
//     console.log('Inside promise2')
//     rejects(new Error('First reject2'))
//     resolve('First resolve2')
// }).catch(error => {
//     console.log('error', error)
// }).then(value => {
//     console.log('Inside first then2')
//     console.log('value', value)
// })
//
//
// new Promise((resolve, rejects) => {
//     console.log('Inside promise2')
//     setTimeout(() => {
//         resolve(Math.random())
//         console.log('After resolve')
//     }, 1000)
// }).then((value) => {
//     console.log('then 1')
//     console.log('value', value)
// }).then((value) => {
//     console.log('then 2')
// }).then((value) => {
//     console.log('then 3')
// })
//
// function returnPromiseForTimeout() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 1000)
//     })
// }
//
// returnPromiseForTimeout()
//     .then(value => {
//         console.log(value)
//         return returnPromiseForTimeout()
//     })
//     .then(value => {
//         console.log(value)
//         return returnPromiseForTimeout()
//     })
//     .then(value => {
//         console.log(value)
//         return returnPromiseForTimeout()
//     })
//     .then(value => {
//         console.log(value)
//         return returnPromiseForTimeout()
//     })
//
//
// setTimeout(() => {
//     const value1 = Math.random()
//     console.log(value1)
//     setTimeout(() => {
//         const value2 = Math.random()
//         console.log(value2)
//         setTimeout(() => {
//             const value3 = Math.random()
//             console.log(value3)
//             setTimeout(() => {
//                 const value4 = Math.random()
//                 console.log(value4)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
//
const fs = require('fs')

async function main() {
    try {
        const result = await fs.promises.readFile('../.git2ignore', 'utf-8')
        console.log(result)
    } catch (e) {
        console.log('error', e)
    }
}

main()

// function readFileInPromise(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (error, value) => {
//             if (error) {
//                 reject(error)
//             }
//             resolve(value)
//         })
//     })
//
//
// readFileInPromise('../.gitignore')
//     .then(value => console.log(value))

// fs.readFile('.gitignore', 'utf-8', (error, value) => {
//     console.log(value)
// })
//
// fs.promises.readFile('../.gitignore', 'utf-8')
//     .then(value => console.log(value))
//
//
// async function sleep(duration) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(undefined)
//         }, duration)
//     })
// }
//
// async function main() {
//     console.log('first')
//     await sleep(1000)
//     console.log('second')
//     await sleep(1000)
//     console.log('third')
//     await sleep(1000)
//     console.log('finish!')
// }

/**
 * Inside promise
 error Error: First reject
 at /Users/2carrot/Documents/workspace/node.js/src/day 4-5.js:5:13
 at new Promise (<anonymous>)
 at Object.<anonymous> (/Users/2carrot/Documents/workspace/node.js/src/day 4-5.js:3:1)
 at Module._compile (internal/modules/cjs/loader.js:1072:14)
 at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
 at Module.load (internal/modules/cjs/loader.js:937:32)
 at Function.Module._load (internal/modules/cjs/loader.js:778:12)
 at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
 at internal/main/run_main_module.js:17:47

 Inside promise
 error Error: First reject
 at /Users/2carrot/Documents/workspace/node.js/src/day 4-5.js:5:13
 at new Promise (<anonymous>)
 at Object.<anonymous> (/Users/2carrot/Documents/workspace/node.js/src/day 4-5.js:3:1)
 at Module._compile (internal/modules/cjs/loader.js:1072:14)
 at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
 at Module.load (internal/modules/cjs/loader.js:937:32)
 at Function.Module._load (internal/modules/cjs/loader.js:778:12)
 at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
 at internal/main/run_main_module.js:17:47
 Inside first then
 value undefined

 */