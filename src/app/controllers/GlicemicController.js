import Glicemic from '../models/GlicemicTest';
import User from '../models/User';

class GlicemicController {
  async store(req, res) {
    const { result, foods } = req.body;

    // const user = await User.findByPk(req.body.userId);
    // console.log(req.body.userId);
    // console.log(result);
    let carbohydrate = 0;

    await foods.forEach(food => {
      carbohydrate += food.portions * food.carbohydrate;
      console.log(carbohydrate);
    });

    return res.json({ carbohydrate });
  }
}

export default new GlicemicController();
