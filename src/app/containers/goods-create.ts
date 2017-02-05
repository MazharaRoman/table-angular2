import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GoodsService } from '../services';
import { Goods } from '../store'
@Component({
  selector: 'goods-create',
  styles: [`
  `],
  template: `
  <div class="container">
  <h4>Create new good</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input [(ngModel)]="good.name" type="text" class="form-control" id="name" required [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input [(ngModel)]="good.description" type="text" class="form-control" id="description" required [ngModelOptions]="{standalone: true}">
      </div>
    
      <button (click)="save(); false" class="btn btn-success">Save</button>
      <button 
        [routerLink]="['']"
        class="btn btn-default" 
      >
        Cancel
      </button>
    
    </form>
  </div>
  `
})
export class GoodsCreate {
  @Output() checked = new EventEmitter();
  good: Goods = {
    id: "",
    name: "",
    description: ""
  };
  constructor( private goodsService: GoodsService, private router: Router, private route: ActivatedRoute ){
    if(route.snapshot.params['goodId'] ) {
    this.good.id = route.snapshot.params['goodId'].toString();
    let goods = goodsService.getGoods();
    this.good = goods.find(x => x.id === this.good.id)
    }
  }

  save() {
    if(this.good.id !== ""){
      this.goodsService.updateGood(this.good);
    }else{
      this.good.id = Date.now().toString();
      this.goodsService.createGood(this.good);
    }
    this.router.navigate(['']);
  }
}
