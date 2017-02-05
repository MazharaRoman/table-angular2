import { Injectable } from '@angular/core';
import { Goods } from '../store';
import { StoreHelper } from './store-helper';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/Rx';

@Injectable()
export class GoodsService {

  constructor(private storeHelper: StoreHelper, private localStorageService: LocalStorageService) {}

  createGood(good: Goods) {
    let goods = this.getGoods();
    goods.push(good);
   return this.localStorageService.set("goods", JSON.stringify(goods))
  }

  getGoods(): Goods[]{
    let goods = this.localStorageService.get<string>("goods");
    if (!goods)
     return new Array<Goods>();
    else
      return JSON.parse(goods);
  }

  updateGood(good){
     let goods = this.getGoods();
     goods = goods.filter(x => good.id !== x.id);
     goods.push(good);
     this.localStorageService.set("goods", JSON.stringify(goods))
  }

  deleteGood(good: Goods) {
    let goods = this.getGoods();
    
    goods = goods.filter(x => good.id !== x.id);
    
    this.localStorageService.set("goods", JSON.stringify(goods))
    return goods
  }
}
