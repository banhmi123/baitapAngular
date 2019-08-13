import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtBusComponent } from './bt-bus.component';
import { DanhsachGheComponent } from './danhsach-ghe/danhsach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';



@NgModule({
  declarations: [BtBusComponent, DanhsachGheComponent, ItemGheComponent],
  exports:[BtBusComponent],
  imports: [
    CommonModule
  ]
})
export class BtBusModule { }
