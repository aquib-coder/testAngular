import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('A test recipe','This is simply a test','https://img.delicious.com.au/ZCVFCYn_/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
  new Recipe('A test recipe','This is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
  new Recipe('A test recipe','This is simply a test','data:image/jpeg;base64,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')

]
@Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }
  OnRecipeSelected(s:Recipe){
this.recipeWasSelected.emit(s);
  }
  ngOnInit(): void {
  }

}
