let express = require("express");
let app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.send("Hello!!");
});
app.listen(3000);
