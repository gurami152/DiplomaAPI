const db = require("../models");
const type = db.typeOfPartOfEquipment;

exports.all = (req, res) => {
    type.findAll().then(function (types){
        res.status(200).json(types);
    })
};
