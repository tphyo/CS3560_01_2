const sqlite3 = require('sqlite3');
const express = require("express");
const data = require("./data");

const app = express();
app.use(express.urlencoded({ extends:true }));
app.use(express.json());

// Root URI
app.get('/', (req, res) => {
    res.send('Hello to our back-end server.')
});

function isEmpty(str) {
    return (!str || str.length === 0 );;
}

function timestamp() {
    var date = new Date();
    return (date.getMonth()+1)+
          "/" + date.getDate()+
          "/" + date.getFullYear()+
          " " + date.getHours()+
          ":" + date.getMinutes()+
          ":" + date.getSeconds()
}

// Creat database and tables
const db = new sqlite3.Database('./kiosk.db', (err) => {
    
});

// GET categories
app.get('/api/categories', (req, res)=> {
    res.send(data.categories);
});

// Seed foodItems from data.js
app.post("/api/products/seed", (req, res, next) => {

});

// GET all foodItems or by category
app.get("/api/products", (req, res, next) => {

});

// POST a new Food Item
app.post("/api/products", (req, res, next) => {

})

// GET current orders
app.get("/api/orders", (req, res, next) => {

});

// POST new order
app.post("/api/orders", (req, res, next) => {

});

// UPDATE order status
app.put("/api/orders/:id", (req, res, next) => {
    
});


// Run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve running at http://localhost:${port}`);
});