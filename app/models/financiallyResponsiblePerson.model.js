module.exports = (sequelize, Sequelize) => {
    const FinancialResponsiblePeople = sequelize.define("financialResponsiblePeople", {
        name: {
            type: Sequelize.STRING
        },
    });
    return FinancialResponsiblePeople;
};

