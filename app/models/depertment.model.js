// const Role = require('./role.model');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("departments", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
    });
};
