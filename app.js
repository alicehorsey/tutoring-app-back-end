const express = require("express");
const app = express();
const apiRouter = require("./routes/apiRouter");
app.use(express.json());
const port = 8080;

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



module.exports = app;
