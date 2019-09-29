import categories from '../../data/categoryList.json';

class CategoryFoodController {
  async index(req, res) {
    const { categoryId } = req.params;

    if (categoryId) {
      const category = await categories.filter(
        categorie => categorie.id.toString() === categoryId.toString()
      );
      return res.json(category);
    }

    const category = await categories;
    return res.json(category);
  }
}

export default new CategoryFoodController();
