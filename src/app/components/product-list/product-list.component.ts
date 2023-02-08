import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {ShoppingCarService} from "../../services/shopping-car.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private shoppingCarService: ShoppingCarService) {
  }

  ngOnInit(): void {
    this.getProdutsList()
  }

  getProdutsList() {
    this.productService.getProductList().subscribe(next => {
      this.products = next;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  resetProducts() {
    this.shoppingCarService.resetCar();
    this.productService.resetProductList();
  }

  addToCar(item: Product) {
    this.shoppingCarService.addProduct(item);
  }
}
