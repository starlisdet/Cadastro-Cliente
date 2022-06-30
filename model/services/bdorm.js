import sq from "sequelize";
const Sequelize = sq.Sequelize;
const sequelize = new Sequelize("agendamento", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
