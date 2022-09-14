import { Ingredients } from '../../Common/Models/ingredients.model';

export class Products {
  id: string;
  type: string;
  price: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredients;
}
