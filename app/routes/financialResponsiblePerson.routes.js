// const { authJwt } = require("../middleware");
const controller = require("../controller/financialResponsiblePerson.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/financial/all", controller.all);

    // app.get(
    //     "/api/test/user",
    //     [authJwt.verifyToken],
    //     controller.userBoard
    // );
    //
    // app.get(
    //     "/api/test/mod",
    //     [authJwt.verifyToken, authJwt.isModerator],
    //     controller.moderatorBoard
    // );
    //
    // app.get(
    //     "/api/test/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.adminBoard
    // );
};
