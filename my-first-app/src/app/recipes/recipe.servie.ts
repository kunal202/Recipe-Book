import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.servie';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Meat', 1), new Ingredient('french', 2)]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[new Ingredient('Burger', 2), new Ingredient('Buns', 12)])
    ];

    constructor(private slServcie : ShoppingListService){

    }
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slServcie.addIngredients(ingredients);
    }
}