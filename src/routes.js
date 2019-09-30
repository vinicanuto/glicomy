import { Router } from 'express';
import UserController from './app/controllers/UserController';
import FoodController from './app/controllers/FoodController';
import CategoryFoodController from './app/controllers/CategoryFoodController';
import GlicemicController from './app/controllers/GlicemicController';

const routes = new Router();

routes.post('/user', UserController.store);

routes.get('/foods', FoodController.index);
routes.get('/foods/:foodId', FoodController.index);
routes.get('/foods/category/:categoryId', FoodController.index);

routes.get('/categories/', CategoryFoodController.index);
routes.get('/categories/:categoryId', CategoryFoodController.index);

routes.post('/glicemic', GlicemicController.store);

export default routes;
