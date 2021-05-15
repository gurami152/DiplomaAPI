const db = require("../models");
const frp = db.financiallyResponsiblePerson;

exports.all = (req, res) => {
    frp.findAll().then(function (fprs){
        res.status(200).json(fprs);
    })
};
