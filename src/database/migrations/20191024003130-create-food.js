module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      base_qty: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      base_unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carbo: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      carbo_unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('food');
  },
};