const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// index path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'views',"index.html"));
})

// manage accounts path
app.get("/account_details", (req, res) => {
    res.sendFile(path.join(__dirname,'views',"transactions.html"));
})

// credits
app.get("/project_references", (req, res) => {
    res.sendFile(path.join(__dirname,'views',"references.html"));
})

// currency api
app.get("/currency_api", (req, res) => {
    res.sendFile(path.join(__dirname,'views',"api.html"));
})

// contact
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,'views',"contact.html"));
})


const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number