const express = require("express");
const bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const cors = require("cors");
const db = require("./models");
const Role = db.role;
const User = db.user;

const app = express();

let corsOptions = {
    origin: "http://192.168.1.151:8080"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my diploma API" });
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// on dev
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });
// on prod
db.sequelize.sync()

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "admin"
    });

    User.create({
        id: 1,
        username: 'Denis',
        email: 'gurami152@gmail.com',
        password: '12345678',
        roleId: 2,
    });
}
