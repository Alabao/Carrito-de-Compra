import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {ShoppingCarService} from "../../services/shopping-car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  products: Product[] = [];
  total:number=0;

  constructor(private shoppingCarService: ShoppingCarService) {
  }

  ngOnInit(): void {
    this.getProdutsList()
  }

  getProdutsList() {
    this.shoppingCarService.getProduct().subscribe(next => {
      this.products = next;
      this.total = this.products.reduce((pre,curr)=>{
          return pre + curr.price;
      },0)
    });
  }

  removeFromCar(id: number) {
    this.shoppingCarService.deleteProduct(id);
  }

}
