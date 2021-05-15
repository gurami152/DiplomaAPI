// const Role = require('./role.model');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("partOfEquipment", {
        model: {
            type: Sequelize.STRING
        },
        manufacturer: {
            type: Sequelize.STRING,
            allowNull: true
        },
        inventoryNumber: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
};
