import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CarListComponent} from "./components/car-list/car-list.component";
import {BuyComponent} from "./components/buy/buy.component";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: 'car',
    component: CarListComponent
  }, { path: 'buy',
    component: BuyComponent
  }, {
    path: '**',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
