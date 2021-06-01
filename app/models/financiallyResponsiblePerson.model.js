module.exports = (sequelize, Sequelize) => {
    return sequelize.define("financialResponsiblePeople", {
        name: {
            type: Sequelize.STRING
        },
    });
};

