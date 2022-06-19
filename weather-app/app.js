const request = require('request')

const url = 'http://localhost:8080/api/forecast/'

request({url : url, json: true}, (error, response) => {
    setTimeout(() => {
        console.log('After two seconds')
    }, 2000)


    if(error) {
        console.log("Error happened")
    } else {
        console.log(response.body.currently)
    }
})

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) //should print 5
})

const friends = (a, b, callback) => {
    callback(a + ' are ' + b + ' friends') //callback is like return. What returns from callback will be set to netice variable
}

friends('Turxan', 'Valeh', (result) => {
    console.log(result)
})