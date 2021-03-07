require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const app = express();
const cors = require("cors");
const Routes = require("./app/routes");

const port = 2000;

app.use([
    cors(),
    Routes
]);

app.listen(port, () => {
    console.log(chalk.green(`Server running at port ${port}`));
})