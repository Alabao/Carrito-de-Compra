import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-acurrency-type',
  templateUrl: './acurrency-type.component.html',
  styleUrls: ['./acurrency-type.component.css']
})
export class AcurrencyTypeComponent implements OnInit {

  public currencies: Array<any> = []

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getCurrencies()
  }

  setCurrency(symbol: string, value: number): void {
    this.currencyService.setCurrency(symbol, value)
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe(({rates}) => {
      let temp = Object.values(rates).map((value: any, index: number) => {
        return {
          symbol: Object.keys(rates)[index],
          value
        }
      })
      this.currencies = temp.filter(cur => cur.symbol === 'USD' || cur.symbol === 'CUP' || cur.symbol === 'EUR')
    })
  }
}
