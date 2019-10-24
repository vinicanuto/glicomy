import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Glicemic from '../app/models/Glicemic';
import Food from '../app/models/Food';
import GlicemicFoods from '../app/models/GlicemicFoods';

const models = [User, Glicemic, Food, GlicemicFoods];

class Database {
  constructor() {
    /* this.init(); */
    this.connection = new Sequelize(databaseConfig);

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
