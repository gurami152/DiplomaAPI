const db = require("../models");
const frp = db.financiallyResponsiblePerson;
const department = db.department;

exports.all = (req, res) => {
    frp.findAll({
        order: [
            ['id', 'DESC'],
        ],
    }).then(function (fprs) {
        fprs.forEach((element) => {
            department.findAll(
                {
                    limit: 1,
                    where: {
                        id: element.departmentId
                    }
                }
            ).then(authorities => {
                //
                // element[0].department = authorities[0].name;
                // console.log(element);
                // console.log(authorities[0].name);
                // console.log(authorities);
            });
            res.status(200).json(fprs);
        })
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
