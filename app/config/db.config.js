module.exports = {
    HOST: "localhost",
    USER: "diploma",
    PASSWORD: "Angelina1998",
    DB: "diploma_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
