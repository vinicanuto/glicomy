module.exports = {
  dialect: 'postgres',
  host: 'localhost', // substituir por localhost
  username: 'postgres',
  password: 'docker',
  port: 5434,
  database: 'glicomy',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
