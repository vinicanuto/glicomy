module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // substituir por localhost
  username: 'postgres',
  password: 'docker',
  port: 5432,
  database: 'glicomy',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
