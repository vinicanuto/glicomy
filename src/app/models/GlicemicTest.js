import Sequelize, { Model } from 'sequelize';

class GlicemicTest extends Model {
  static init(sequelize) {
    super.init(
      {
        result: Sequelize.DECIMAL,
        target: Sequelize.DECIMAL,
        carbohydrate: Sequelize.DECIMAL,
        insulimn: Sequelize.DECIMAL,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default GlicemicTest;
