const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 5000;
const Task = require('../model/task');
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("You are on the hompage");
})
app.post("/post", (req, res) => {
    res.send(`Welcome ${req.body.user}`);
})
app.delete("/delete", (req, res) => {
    res.send("{delete: true}");
})

app.put("/put/:ID", (req, res) => {

    res.send(`Task ${req.params.ID} has been updated`);

})
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)

})
module.exports = router;