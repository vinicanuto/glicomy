import Sequelize, { Model } from 'sequelize';

class Food extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        base_qty: Sequelize.DECIMAL,
        base_unit: Sequelize.STRING,
        carbo: Sequelize.DECIMAL,
        carbo_unit: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.CategoryFood, { foreignKey: 'category_food_id' });
  }
}

export default Food;
