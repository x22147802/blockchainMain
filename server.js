const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'frontend/public')))

// index path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'frontend/views',"index.html"));
})

// manage accounts path
app.get("/account_details", (req, res) => {
    res.sendFile(path.join(__dirname,'frontend/views',"transactions.html"));
})

// credits
app.get("/project_references", (req, res) => {
    res.sendFile(path.join(__dirname,'frontend/views',"references.html"));
})

// currency api
app.get("/currency_api", (req, res) => {
    res.sendFile(path.join(__dirname,'frontend/views',"api.html"));
})

// contact
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname,'frontend/views',"contact.html"));
})


const server = app.listen(process.env.PORT||5000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number