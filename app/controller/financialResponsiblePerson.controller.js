const db = require("../models");
const frp = db.financiallyResponsiblePerson;
const department = db.department;

exports.all = (req, res) => {
    frp.findAll({
        include: department,
        order: [
            ['id', 'DESC'],
        ],
    }).then(function (fprs) {
        res.status(200).json(fprs);
    });
}

exports.store = (req, res) => {
    frp.create({
        name: req.body.name,
        departmentId: req.body.department_id,
    })
    res.status(200).send();
};
