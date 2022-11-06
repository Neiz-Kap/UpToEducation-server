const { Sequelize } = require("sequelize");

const sequelize = (process.env.NODE_ENV = "production"
  ? new Sequelize(process.env.DB_LINK, {
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : process.env.NODE_ENV = "development" ? new Sequelize(
      process.env.POSTGRES_NAME,
      process.env.POSTGRES_USER,
      process.env.POSTGRES_PASSWORD,
      {
        dialect: "postgres",
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
      }
    )) : null;

module.exports = sequelize;

module.exports
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
