import { Component,
    Input,
    Output,
    EventEmitter } from '@angular/core';

@Component({
  selector: 'goods-row',
  styles: [`
    
  `],
  template: `
          <tr>
            <td>{{good.id}}</td>
            <td>{{good.name}}</td>
            <td>{{good.description}}</td>
            <td><button class="btn btn-warning">Update</button></td>
            <td><button class="btn btn-danger" (click)="delete()">Delete</button></td>
          </tr>
  `
})
export class GoodsRow {
    @Input() good = {};
    @Output() goodDelete = new EventEmitter();

    delete(){
        this.goodDelete.next(this.good);
    }
}
