import Sequelize, { Model } from 'sequelize';

class CategoryFood extends Model {
  static init(sequelize) {
    super.init(
      {
        category: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}

export default CategoryFood;
