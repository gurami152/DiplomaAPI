module.exports = {
    HOST: "10.1.5.246",
    USER: "user",
    PASSWORD: "pass",
    DB: "db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
