const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

app.get('/', (req, res) => {
    con.connect(() => {
        con.query("select * from user", (err, data) => {
            res.send(data)
        })
    })
})

app.get('/:un', (req, res) => {
    con.connect(() => {
        con.query(`select * from user where un = '${req.params.un}'`, (err, data) => {
            res.send(data)
        })
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/tom`)
})