const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const router = express.Router();
const initiateRoutes = require("./routes");
const initiateSwagger = require("./utils/swagger");
const { auth } = require("./middlewares/auth");

const app = express();

app.use(urlencoded({
    extended: true
}));

app.use(json({
    extended: true
}));

app.use(cookieParser());

app.use(cors());

app.set("view engine", "ejs");

app.use(express.static("public"));

initiateSwagger(router);
initiateRoutes(router);

app.use(auth);
app.use('/', router);

module.exports = {
    app,
    router
};
