// const Role = require('./role.model');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("equipment", {
        inventoryNumber: {
            type: Sequelize.STRING
        },
    });
};
