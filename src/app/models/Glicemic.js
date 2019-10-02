import Sequelize, { Model } from 'sequelize';

class Glicemic extends Model {
  static init(sequelize) {
    super.init(
      {
        result: Sequelize.DECIMAL,
        target_user: Sequelize.DECIMAL,
        carbohydrate: Sequelize.DECIMAL,
        insulimn: Sequelize.DECIMAL,
        date: Sequelize.DATE,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Glicemic;
