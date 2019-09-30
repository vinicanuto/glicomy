module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('glicemic', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      result: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      target: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      carbohydrate: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      insulimn: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
    return queryInterface.dropTable('glicemic');
  },
};
