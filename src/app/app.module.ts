import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';
import { BuyComponent } from './components/buy/buy.component';
import { AcurrencyTypeComponent } from './components/acurrency-type/acurrency-type.component';
import { AcurrencyChangePipe } from './common/acurrency-change.pipe';
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarListComponent,
    CarComponent,
    BuyComponent,
    AcurrencyTypeComponent,
    AcurrencyChangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
