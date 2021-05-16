const db = require("../models");
const status = db.status;

exports.all = (req, res) => {
    status.findAll().then(function (status){
        res.status(200).json(status);
    })
};
