module.exports = (sequelize, Sequelize) => {
    return sequelize.define("status", {
        name: {
            type: Sequelize.STRING
        }
    });
};
