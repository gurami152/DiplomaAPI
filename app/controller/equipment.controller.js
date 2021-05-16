const db = require("../models");
const equipment = db.equipment;

exports.all = (req, res) => {
    equipment.findAll().then(function (equipments){
        res.status(200).json(equipments);
    })
};
