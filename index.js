const http = require('http')
const cripto = require('crypto')
const process = require('process')
const fs = require('fs')

http.createServer((req, res) => {

    const { url, method } = req;

    if (url === '/api/users' && method === 'GET') {
        // GET   get data from server/backend
        console.log(url, method);

        res.writeHead(200, {
            'content-type': 'application/json'
        })

        const data = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }

        res.end(JSON.stringify({ response: data }))

    } else if (url === '/api/users' && method === 'POST') {
        // POST create new data 
        let body = ""
        req.on('data', (data) => { body += data })
        req.on('end', () => {
            res.writeHead(201, {
                'content-type': 'application/json'
            })
            console.log(body);

            res.end()
        })





    }





}).listen(4000, () => {
    console.log('server working....');
})