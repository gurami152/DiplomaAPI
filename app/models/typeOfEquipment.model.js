// const Role = require('./role.model');
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("typeOfEquipment", {
        name: {
            type: Sequelize.STRING
        },
    });
};
