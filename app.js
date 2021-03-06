const express = require("express"),
      path = require("path"),
      app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(process.env.PORT ||3000, ()=>{
    console.log("Servidor corriendo");
})

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})