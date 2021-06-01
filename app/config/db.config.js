module.exports = {
    HOST: "192.168.1.101",
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
