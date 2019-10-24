import categoryList from '../../data/categoryList.json';
import CategoryFood from '../models/CategoryFood';

class CategoryFoodController {
  async index(req, res) {
    const { categoryId } = req.params;

    if (categoryId) {
      const category = await CategoryFood.findByPk(categoryId);
      return res.json(category);
    }

    const category = await CategoryFood.findAll({ limit: 20 });
    return res.json(category);
  }

  async populate(res) {
    await categoryList.forEach(cat => {
      const { category } = cat;

      CategoryFood.create({
        category,
      });
    });

    return res.json({ message: 'Populate ok' });
  }
}

export default new CategoryFoodController();
