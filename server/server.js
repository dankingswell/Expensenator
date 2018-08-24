const express = require("express");
const Path = require("path");
const app = express();
const publicPath = Path.join(__dirname,"..","public")
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.get("*", (req,res) => {
    res.sendfile(Path.join(publicPath,"index.html"))
})

app.listen(port , ()=>{
    console.log("Server live")
});