import {Injectable} from '@angular/core';
import productos from '../../assets/json/product.json'
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject([...productos]);
  products$: Observable<Product[]> = this.products.asObservable();

  constructor() {
    if (localStorage.getItem('products')) {
      this.products.next(JSON.parse(localStorage.getItem('products') || ''))
    }
    this.products$.subscribe(next => {
      localStorage.setItem('products', JSON.stringify(next))
    })
  }

  getProductList(): Observable<Product[]> {
    return this.products$;
  }

  resetProductList() {
    this.products.next([...productos]);
  }

  deleteProduct(id: number) {
    this.products.value.splice(this.products.getValue().findIndex(prod => prod.id === id), 1)
    this.products.next(this.products.getValue())
  }
}
