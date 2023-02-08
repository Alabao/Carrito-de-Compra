import { Component, OnInit } from '@angular/core';
import {ShoppingCarService} from "../../services/shopping-car.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private shoppingCarService: ShoppingCarService) { }

  ngOnInit(): void {
    this.shoppingCarService.resetCar()
  }

}
