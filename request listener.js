const http = require('http')

const server = http.createServer((req, res) => {
    console.log('incoming request')
    console.log(req.method, req.url)

    if (req.method === 'POST') {
        let body = ''
        req.on('end', () => {
            const userName = body.split('=')[1]
            console.log(body)
            res.end(`<h1>Got the POST request: ${userName}</h1>`)
        })

        req.on('data', (chunk)  => {
           body+= chunk 
        })
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.end(
            '<form form method = "POST"><input type="text" name="username"> <button type="submit">Create User</button></input></form>')
    }
})

server.listen(5000)