import foodList from '../../data/foodList.json';

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
}

export default new FoodController();
