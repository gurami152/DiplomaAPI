const db = require("../models");
const equipment = db.equipment;
const frp = db.financiallyResponsiblePerson;
const status = db.status;
const type = db.typeOfEquipment;

exports.all = (req, res) => {
    equipment.findAll({
        include: frp, status, type,
        order: [
            ['id', 'DESC'],
        ],
    }).then(function (fprs) {
        res.status(200).json(fprs);
    });
};
