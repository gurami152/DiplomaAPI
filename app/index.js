const express = require("express");
const bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
const cors = require("cors");
const db = require("./models");
const Role = db.role;
const Department = db.department;
const User = db.user;
const FinancialResponsiblePerson = db.financiallyResponsiblePerson;
const Status = db.status;

const app = express();

let corsOptions = {
    origin: "http://192.168.1.198:8081"
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
require('./routes/financialResponsiblePerson.routes')(app);
require('./routes/status.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


// on dev
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

// on prod
// db.sequelize.sync()

async function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    await Role.create({
        id: 2,
        name: "admin"
    });

    await Department.create({
        id: 1,
        name: 'ЦИТ'
    });

    User.create({
        id: 1,
        username: 'Denis',
        email: 'gurami152@gmail.com',
        password: '12345678',
        roleId: 2,
    });

    FinancialResponsiblePerson.create({
        id: 1,
        name: 'DENIS',
        departmentId: 1
    });

    Status.create({
        name: 'В ремонті'
    })

}
