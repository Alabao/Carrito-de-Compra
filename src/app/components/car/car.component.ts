import {Component, OnInit} from '@angular/core';
import {ShoppingCarService} from "../../services/shopping-car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  count: number = 0;

  constructor(private shoppingCarService: ShoppingCarService) {
  }

  ngOnInit(): void {
    this.getProdutsList()
  }

  getProdutsList() {
    this.shoppingCarService.getProduct().subscribe(next => {
      this.count = next.length;
    });
  }

}
