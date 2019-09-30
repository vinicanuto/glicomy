import Glicemic from '../models/GlicemicTest';
import User from '../models/User';

class GlicemicController {
  async store(req, res) {
    const { result, foods } = req.body;

    const user = await User.findByPk(req.body.userId);
    const carbohydrate;

    foods.forEach(food => {await foodList.filter(
      food.id === foodList.id
    ) carbohydrate = carbohydrate+(food.portion * foodList.carbohydrate)   
    })


  }
}

export default new GlicemicController();
