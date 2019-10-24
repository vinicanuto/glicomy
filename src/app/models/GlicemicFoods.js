import Sequelize, { Model } from 'sequelize';

class GlicemicFoods extends Model {
  static init(sequelize) {
    super.init(
      {
        portion: Sequelize.DECIMAL,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Glicemic, { foreignKey: 'glicemics_id' });
    this.belongsTo(models.Food, { foreignKey: 'food_id' });
  }
}

export default GlicemicFoods;
