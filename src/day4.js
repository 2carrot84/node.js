const personalData = {
    nickname: 'CG',
    email: '2carrot84@gmail.com',
}
const publicData = {
    age: 22,
}
const user = {
    ...personalData,
    ...publicData,
}
console.log(user)

const overrides = {
    DATABASE_HOST: 'myhost.com',
    DATABASE_PASSWORD: 'mypassword',
}
const config = {
    DATABASE_HOST: 'default.host.com',
    DATABASE_PASSWORD: '****',
    DATABASE_USERNAME: 'myuser',
    ...overrides
}
console.log(config)

const user2 = {
    nickname: 'CH',
    age: 22,
    email: '2carrot84@gmail.com'
}
const {nickname, ...personalData2} = user2
console.log(personalData2)

const pets = ['dog', 'cat']
const predators = ['wolf', 'cougar']
const animals = [...pets, ...predators]

console.log(animals)

// array rest
const [head, ...rest] = [1, 2, 3]
console.log(head)
console.log(rest)

const ary = [1, 2, 3, 4, 5]
const [head2, ...rest2] = ary
console.log(head2, ...rest2)

function foo(head, ...rest) {
    console.log(head)
    console.log(rest)
}

foo(1, 2, 3, 4)