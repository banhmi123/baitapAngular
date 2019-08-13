import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { DSPhimComponent } from './dsphim/dsphim.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';



@NgModule({
  declarations: [InteractionComponent, DSPhimComponent, ItemPhimComponent],
  exports:[InteractionComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionModule { }
