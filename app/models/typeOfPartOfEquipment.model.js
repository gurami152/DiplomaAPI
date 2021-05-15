// const Role = require('./role.model');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("typeOfPartOfEquipment", {
        name: {
            type: Sequelize.STRING
        },
    });
};
