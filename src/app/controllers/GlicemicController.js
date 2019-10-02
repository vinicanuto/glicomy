import Glicemic from '../models/Glicemic';
import User from '../models/User';

class GlicemicController {
  async store(req, res) {
    const { result, foods } = req.body;

    const user = await User.findByPk(req.body.userId);
    // console.log(req.body.userId);
    // console.log(result);
    let carbohydrate = 0;

    await foods.forEach(food => {
      carbohydrate += food.portions * food.carbohydrate;
      console.log(carbohydrate);
    });
    const { target: target_user, id: userId } = user;

    console.log('target', target_user);

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

    return res.json({ correction, counting, doses });
  }
}

export default new GlicemicController();
