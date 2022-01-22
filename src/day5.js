// @ts-check
// require('core-js')
//
// const complicatedArray = [1, [2, 3]]
// const flattendArray = complicatedArray.flat()
// console.log(flattendArray)

// const original = 'abcabc123'
// const changed = original.replaceAll('abc', '123')
// console.log(changed)

// function sleep(duration) {
//     return new Promise((resolve) => {
//         console.log('sleep start')
//         setTimeout(() => {
//             console.log('sleep done', duration)
//             resolve(undefined)
//         }, duration)
//     })
// }
//
// function alwaysReject() {
//     return new Promise((resolve, reject) => {
//         reject()
//     })
// }
//
// Promise.allSettled([
//     sleep(1000),
//     sleep(1500),
//     sleep(2000),
//     alwaysReject(),
// ]).then((value) => {
//     console.log('Promise.allSettled done!', value)
// })

const objs = [
    {
        foo: {
            bar: {
                baz: 1,
            },
        },
    },
    {},
    {
        foo: {}
    }
]

console.log(objs.map(obj => obj.foo?.bar?.baz))