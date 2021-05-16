const db = require("../models");
const type = db.typeOfEquipment;

exports.all = (req, res) => {
    type.findAll().then(function (types){
        res.status(200).json(types);
    })
};
