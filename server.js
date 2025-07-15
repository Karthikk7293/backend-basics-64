import express from 'express'

const server = express()

server.use(express.json()) // to parse the data 

server.get('/api/users', (req, res) => { // GET  get data from db 
    console.log("this is get method");
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

    res.json(data)

})

server.post('/api/users', (req, res) => {  // POST  create new data 
    console.log(req.body);

    res.json(req.body)
})

server.put('/api/users', (req, res) => { // PUT update the entire data 
    console.log(req.body);

    res.json(req.body)
})

server.patch('/api/users', (req, res) => { // PATCH partially update the data 
    console.log(req.body);

    res.json(req.body)
})

server.delete('/api/users', (req, res) => { // DELETE delete the data from db
    console.log(req.body);

    res.json(req.body)
})




server.listen(3000, () => {
    console.log('server is running........');

})