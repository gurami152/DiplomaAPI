const db = require("../models");
const department = db.department;

exports.all = (req, res) => {
    department.findAll().then(function (department){
        res.status(200).json(department);
    })
};
