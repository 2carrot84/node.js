// @ts-check
const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

new Promise((resolve, rejects) => {
    console.log('Inside promise1')
    sleep(1000)
    rejects(new Error('First reject1'))
    resolve('First resolve1')
}).then(value => {
    console.log('Inside first then1')
    console.log('value', value)
}).catch(error => {
    console.log('error', error)
})
/*
Inside promise1
error
:Error: First reject1
 */

new Promise((resolve, rejects) => {
    console.log('Inside promise2')
    rejects(new Error('First reject2'))
    resolve('First resolve2')
}).catch(error => {
    console.log('error', error)
}).then(value => {
    console.log('Inside first then2')
    console.log('value', value)
})
/*
Inside promise2
error
:Error: First reject2
Inside first then2
valueundefined
 */

new Promise((resolve, rejects) => {
    console.log('Inside promise2')
    setTimeout(() => {
        resolve(Math.random())
        console.log('After resolve')
    }, 1000)
}).then((value) => {
    console.log('then 1')
    console.log('value', value)
}).then((value) => {
    console.log('then 2')
    console.log('value', value)
}).then((value) => {
    console.log('then 3')
    console.log('value', value)
})
/*
Inside promise2
After resolve
then 1
value0.6893501856716817
then 2
then 3
 */
function returnPromiseForTimeout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 1000)
    })
}

returnPromiseForTimeout()
    .then(value => {
        console.log(value)
        return returnPromiseForTimeout()
    })
    .then(value => {
        console.log(value)
        return returnPromiseForTimeout()
    })
    .then(value => {
        console.log(value)
        return returnPromiseForTimeout()
    })
    .then(value => {
        console.log(value)
        return returnPromiseForTimeout()
    })
/*
0.8451924276841662
0.3173270175130023
0.2899827674825355
0.8148152584175137
 */

setTimeout(() => {
    const value1 = Math.random()
    console.log(value1)
    setTimeout(() => {
        const value2 = Math.random()
        console.log(value2)
        setTimeout(() => {
            const value3 = Math.random()
            console.log(value3)
            setTimeout(() => {
                const value4 = Math.random()
                console.log(value4)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

/*
0.8581614552504644
0.3946617212828898
0.8469318628343485
0.7590294478424375
 */

const fs = require('fs')
async function main() {
    try {
        const result = await fs.promises.readFile('../.gitignore', 'utf-8')
        console.log(result)
    } catch (e) {
        console.log('error', e)
    }
}
main()
/*
.glitchdotcom.json
.node-gyp
node_modules
 */

function readFileInPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (error, value) => {
            if (error) {
                reject(error)
            }
            resolve(value)
        })
    })
}

readFileInPromise('.gitignore').then(value => console.log(value))
/*
.glitchdotcom.json
.node-gyp
node_modules
 */


fs.readFile('.gitignore', 'utf-8', (error, value) => {
    console.log(value)
})
fs.promises.readFile('../.gitignore', 'utf-8')
    .then(value => console.log(value))

async function sleep(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined)
        }, duration)
    })
}

async function main() {
    console.log('first')
    await sleep(1000)
    console.log('second')
    await sleep(1000)
    console.log('third')
    await sleep(1000)
    console.log('finish!')
}

main()
/*
first
second
third
finish!
 */