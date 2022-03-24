import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A test recipe','This is simply a test','https://img.delicious.com.au/ZCVFCYn_/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('A test recipe','This is simply a test','data:image/jpeg;base64,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'),
    new Recipe('A test recipe','This is simply a test','data:image/jpeg;base64,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')
    ]
  constructor() { }
  ngOnInit(): void {
  }
  OnRecipeListSelected(r:Recipe){
    this.recipeWasSelected.emit(r);
  }

}
