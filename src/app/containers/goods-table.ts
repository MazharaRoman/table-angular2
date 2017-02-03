import { Component } from '@angular/core';
import { GoodsService } from '../services';
import { Router } from '@angular/router';

import { Goods } from '../store'
import { Store } from '../store';
import 'rxjs/Rx';

@Component({
  selector: 'goods-table',
  styles: [`
   .goods-table {
   }
  `],
  template: `
  <div class="col-xs-10">
    <div class="goods-table table-bordered">
        <table class="table">
        <thead>
          <th>Id</th>
          <th>Name<th>
          <th>Description</th>
          <th colspan="2">Actions</th>
          </thead>
          <tbody>
          <tr  *ngFor="let good of goods" >
            <td>{{good.id}}</td>
            <td>{{good.name}}</td>
            <td>{{good.description}}</td>
            <td><button class="btn btn-warning" (click)="update(good)">Update</button></td>
            <td><button class="btn btn-danger" (click)="delete(good)">Delete</button></td>
          </tr>
         </tbody>
        </table>
        <button 
        class="btn btn-primary"
        [routerLink]="['','new']"
        >
        New
        </button>
    </div>
    </div>
  `
})
export class GoodsTable {
   goods: any[] = [];
    constructor(
    private store: Store,
    private goodsService: GoodsService,
    private router: Router 
  ) {
    this.goods = this.goodsService.getGoods()
  }
  update(good){
    this.router.navigate(['update', good.id]);
  }
  delete(good){
    console.log(good);
    this.goods = this.goods.slice(this.goods.indexOf(good),1);

    this.goods = this.goodsService.deleteGood(good);
  }

}
