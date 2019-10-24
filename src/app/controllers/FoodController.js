import foodList from '../../data/foodList.json';
import Food from '../models/Food';

class FoodController {
  async index(req, res) {
    const { categoryId } = req.params;
    if (categoryId) {
      const foods = await foodList.filter(
        food => food.category_id.toString() === categoryId.toString()
      );
      return res.json(foods);
    }
    const { foodId } = req.params;
    if (foodId) {
      const foods = await foodList.filter(
        food => food.id.toString() === foodId.toString()
      );
      return res.json(foods);
    }
    const foods = await foodList;
    return res.json(foods);
  }

  async populate(req, res) {
    const carboQtd = 0.0;
    const carboUnit = 'g';

    await foodList.forEach(food => {
      const { description, base_qty, base_unit } = food;

      if (food.attributes.carbohydrate === undefined) {
        const qty = carboQtd;
        const unit = carboUnit;

        Food.create({
          description,
          base_qty,
          base_unit,
          carbo: qty,
          carbo_unit: unit,
        });
      } else {
        let { qty, unit } = food.attributes.carbohydrate;
        if (isNaN(qty) || qty === null) {
          qty = 0;
        }

        Food.create({
          description,
          base_qty,
          base_unit,
          carbo: qty,
          carbo_unit: unit,
        });
      }
    });

    return res.json({ message: 'Populate ok' });
  }
}

export default new FoodController();
