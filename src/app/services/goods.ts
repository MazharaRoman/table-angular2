import { Injectable } from '@angular/core';
import { Goods } from '../store';
import { StoreHelper } from './store-helper';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/Rx';

@Injectable()
export class GoodsService {

  constructor(private storeHelper: StoreHelper, private localStorageService: LocalStorageService) {}

  createGood(good: Goods) {
    let goods = [];
    if (this.localStorageService.get("goods")){
        goods = JSON.parse(this.localStorageService.get("goods"));
    }
    goods.push(good);
   return this.localStorageService.set("goods", JSON.stringify(goods))
  }

  getGoods(){
    return JSON.parse(this.localStorageService.get("goods"));
  }

  deleteGood(good: Goods) {
     let goods = [];
    if (this.localStorageService.get("goods")){
        goods = JSON.parse(this.localStorageService.get("goods"));
    }
    console.log(goods);
    
    goods = goods.filter(x => good.id !== x.id);
    console.log(goods);
    
    this.localStorageService.set("goods", JSON.stringify(goods))
    return goods
  }
}
