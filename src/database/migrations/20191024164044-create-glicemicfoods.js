module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('glicemic_foods', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      glicemics_id: {
        type: Sequelize.INTEGER,
        references: { model: 'glicemics', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: null,
        allowNull: false,
      },
      food_id: {
        type: Sequelize.INTEGER,
        references: { model: 'food', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: null,
        allowNull: false,
      },
      portion: {
        type: Sequelize.DECIMAL,
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
    return queryInterface.dropTable('glicemic_foods');
  },
};
