const fs = require('fs')

const userName = 'Tanaka'

console.log(userName)

// file system API
fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('WROTE FILE')
})