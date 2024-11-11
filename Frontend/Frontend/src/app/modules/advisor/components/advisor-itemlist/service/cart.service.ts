import { Injectable } from '@angular/core';
import { Item } from '../../../../../item';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private items: Item[] = [];
  

constructor() { }

addToCart(item: Item) {
    
    const isItemPresent = this.items.some((cartItem) => cartItem.id === item.id);
    if (!isItemPresent) {
        item.quantity = 1;
        this.items.push(item);
    }
}



decreaseItemQuantity(itemID: number) {
    this.clearCart();
    const item = this.items.find((cartItem) => cartItem.id === itemID);
    if (item && item.quantity > 1) {
        item.quantity--;
    }
}

increaseItemQuantity(itemID: number) {
    const item = this.items.find((cartItem) => cartItem.id === itemID);
    if (item) {
        item.quantity++;
    }
}

removeItem(id: number) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
}

getItems() {
    return this.items;
}

clearCart() {
    this.items = [];
  }

}
