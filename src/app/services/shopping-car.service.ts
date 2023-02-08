import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject(<Product[]>[]);
  products$: Observable<Product[]> = this.products.asObservable();

  constructor() {
    if (localStorage.getItem('car')) {
      this.products.next(JSON.parse(localStorage.getItem('car') || ''))
    }
    this.products$.subscribe(next => {
      localStorage.setItem('car', JSON.stringify(next))
    })
  }

  getProduct(): Observable<Product[]> {
    return this.products$;
  }

  addProduct(product:Product) {
    this.products.value.push(product);
    this.products.next(this.products.getValue())
  }

  deleteProduct(id: number) {
    this.products.value.splice(this.products.getValue().findIndex(prod => prod.id === id), 1)
    this.products.next(this.products.getValue())
  }

  resetCar(){
    this.products.next([]);
  }
}
