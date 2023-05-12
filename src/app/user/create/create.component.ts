import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  productItems=[
"Taboule Salad",
"Greek Salad",
"Chicken Caesar Salad",
"Chickpea Salad",
"Pasta Primavera",
"Tuna Salad",
"Egg Salad",
"Pacific Salad",
"Vegan Chopped Salad",
"Sesame Seaweed Salad",
"Black Bean Salad",
"Muffuletta Olive Salad",
"Broccoli Crunch Salad",
"Seasoned Squid Salad",
"Squash Butternut Sprout Brussels Fp Salad",
"Gala Apple",
"Green Apple",
"Cherry Tomatoes",
"Red Cherries",
"Blueberries",
"Strawberries",
"Banana",
"Watermelon",
"Honeydew",
"Red Grapes",
"Green Grapes",
"Orange",
"Grapefruit",
"Kiwi",
"Mango",
"Green Coconut",
"Pineapple",
"Orange Juice",
"Grapes Juice",
"Apple Juice",
"Pineapple Juice",
"Mango Juice",
"Strawberry Juice",
"Canberry Juice",
"Cherry Juice",
"Bell pepper",
"Red Onion",
"Potato",
"Squash",
"SweetPotato",
"Eggplant",
"Cauliflower",
"Cabbage",
"Red Cabbage",
"Carrot"
];

  createPlan=[
    "Apple",
    "Cabbage",
    "Pineapple Juice",
    "Egg Salad"
  ];

  items = ['product'];

  quantities: number[] = [];

  totalQuantity: number = 0;

  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  calculate() {
    this.totalQuantity = this.quantities.reduce((sum, quantity) => sum + (quantity || 0), 0);
  }

}
