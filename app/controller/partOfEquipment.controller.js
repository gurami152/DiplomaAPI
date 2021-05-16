const db = require("../models");
const part = db.partOfEquipment;

exports.all = (req, res) => {
    part.findAll().then(function (parts){
        res.status(200).json(parts);
    })
};
