const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.department = require("../models/depertment.model")(sequelize, Sequelize);
db.equipment = require("../models/equipment.model")(sequelize, Sequelize);
db.financiallyResponsiblePerson = require("../models/financiallyResponsiblePerson.model")(sequelize, Sequelize);
db.partOfEquipment = require("../models/partOfEquipment.model")(sequelize, Sequelize);
db.status = require("../models/status.model")(sequelize, Sequelize);
db.typeOfEquipment = require("../models/typeOfEquipment.model")(sequelize, Sequelize);
db.typeOfPartOfEquipment = require("../models/typeOfPartOfEquipment.model")(sequelize, Sequelize);

// db.role.belongsToMany(db.user, {
//     through: "user_roles",
//     foreignKey: "roleId",
//     otherKey: "userId"
// });
db.user.belongsTo(db.role, {foreignKey: 'roleId'});
db.financiallyResponsiblePerson.belongsTo(db.department, {foreignKey: 'departmentId', foreignKeyConstraint: true});

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
