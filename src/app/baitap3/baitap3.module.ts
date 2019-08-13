import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap3Component } from './baitap3.component';
import { Baitap3HeaderComponent } from './baitap3-header/baitap3-header.component';
import { Baitap3ContentsComponent } from './baitap3-contents/baitap3-contents.component';
import { Baitap3SliderbarComponent } from './baitap3-sliderbar/baitap3-sliderbar.component';
import { Baitap3FooterComponent } from './baitap3-footer/baitap3-footer.component';



@NgModule({
  declarations: [Baitap3Component, Baitap3HeaderComponent, Baitap3ContentsComponent, Baitap3SliderbarComponent, Baitap3FooterComponent],
  exports: [Baitap3Component, Baitap3HeaderComponent, Baitap3ContentsComponent, Baitap3SliderbarComponent, Baitap3FooterComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap3Module { }
