import { Op } from 'sequelize';
import Glicemic from '../models/Glicemic';
import User from '../models/User';
import Food from '../models/Food';
import GlicemicFoods from '../models/GlicemicFoods';

class GlicemicController {
  async store(req, res) {
    const { result, foods } = req.body;

    let carbohydrate = 0;

    const foodId = [];

    foods.map(fd => {
      return foodId.push({ id: fd.id, portions: fd.portions });
    });

    foodId.forEach(async food => {
      const { carbo } = await Food.findByPk(food.id);

      carbohydrate += carbo * food.portions;
    });

    const user = await User.findByPk(req.body.userId);

    const { target: target_user, id: userId } = user;

    const correction = (result - user.target) / user.basal;
    const counting = carbohydrate <= 0 ? 0 : carbohydrate / 15;
    const doses = correction + counting;

    const glic = await Glicemic.create({
      result,
      target_user,
      carbohydrate,
      insulimn: doses,
      date: new Date(),
      user_id: userId,
    });

    if (foodId) {
      foodId.forEach(async food => {
        await GlicemicFoods.create({
          glicemics_id: glic.id,
          food_id: food.id,
          portion: food.portions,
        });
      });
    }

    return res.json({ correction, counting, doses, carbohydrate });
  }
}

export default new GlicemicController();
