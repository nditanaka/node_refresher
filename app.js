const express = require('express')

const app = express()

app.use((req, res, next) => {
    let body = ''
    req.on('end', () => {
        const userName = body.split('=')[1]
        if (userName) {
            req.body = { name: userName }
        }
        next() // pass on to the next middleware when we're done in this one
    })
    req.on('data', chunk => {
        body += chunk
    })
})
// register a function as middleware
app.use((req, res, next) => {
    if (req.body) {
        return res.send('<h1>' + req.body.name + '</h1>')
    }
    res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></input></form>')
})

app.listen(5000)