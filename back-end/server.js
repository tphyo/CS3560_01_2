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
    return (!str || str.length === 0 );
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
    if (err) { // If there's an error opening the database, display an error message
        console.error("Error opening database " + err.message);
    } else { 
        // else, create tables for foodItems, orders, orderItems if not existed
        db.run('CREATE TABLE IF NOT EXISTS foodItems( \
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            name NVARCHAR(50) NOT NULL,\
            image NVARCHAR(50) NOT NULL,\
            price FLOAT NOT NULL,\
            calories INTERGER,\
            category NVARCHAR(10),\
            ingredient NVARCHAR(100),\
            healthNotes NVARCHAR(50),\
            prepTime INTERGER,\
            inStock INTERGER(1)\
        )', (err) => {
            if (err) {
                console.log("Cannot create table foodItems. Because of" + err);
            }
        });

        db.run('CREATE TABLE IF NOT EXISTS orders( \
            number INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            orderType NVARCHAR(10) NOT NULL,\
            paymentType NVARCHAR(50) NOT NULL,\
            isPaid INTEGER(1) NOT NULL,\
            isReady INTEGER(1) NOT NULL,\
            isProgress INTEGER(1) NOT NULL,\
            isCanceled INTEGER(1) NOT NULL,\
            isDelivered INTEGER(1) NOT NULL,\
            taxPrice FLOAT,\
            totalPrice FLOAT,\
            createdAt DATETIME,\
            updatedAt DATETIME\
        )', (err) => {
            if (err) {
                console.log("Cannot create table orders. Because of" + err);
            }
        });

        db.run('CREATE TABLE IF NOT EXISTS orderItems( \
            orderID INTEGER NOT NULL,\
            itemID INTEGER NOT NULL,\
            quantity INTERGER NOT NULL,\
            CONSTRAINT orderItemsPK PRIMARY KEY (orderID, itemID),\
            CONSTRAINT orderItemsFK_order FOREIGN KEY (orderID) REFERENCES orders(number) ON UPDATE CASCADE ON DELETE CASCADE,\
            CONSTRAINT orderItemsFK_item FOREIGN KEY (itemID) REFERENCES foodItems(id) ON UPDATE CASCADE ON DELETE CASCADE\
        )', (err) => {
            if (err) {
                console.log("Cannot create table orders. Because of" + err);
            }
        });
    }
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
    var currentTime = timestamp();
    var action = req.body.action;
    if (action === "ready") {
        let update = 'UPDATE orders SET isReady = 1, isProgress = 0, updatedAt = ? WHERE number = ?';
        db.run(update, [currentTime, req.params.id], function(err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "action": action,
                "orderNumber": req.params.id
            })
        });
    } else if (action === "deliver") {
        let update = 'UPDATE orders SET isDelivered = 1, isPaid = 1, isProgress = 0, updatedAt = ? WHERE number = ?';
        db.run(update, [currentTime, req.params.id], function(err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "action": action,
                "orderNumber": req.params.id
            })
        });
    } else if (action === "cancel"){
        let update = 'UPDATE orders SET isCanceled = 1, isProgress = 0, updatedAt = ? WHERE number = ?';
        db.run(update, [currentTime, req.params.id], function(err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                "message": "success",
                "action": action,
                "orderNumber": req.params.id
            })
        });
    }
});


// Run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve running at http://localhost:${port}`);
});
