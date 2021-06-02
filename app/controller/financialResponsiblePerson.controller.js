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
    console.log(req.body.department_id);
    frp.create({
        name: req.body.name,
        departmentId: req.body.department_id,
    })
    res.status(200).send();
    // frp.findAll().then(function (department){
    //     res.status(200);
    // })
};
