import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaiTap1Component } from './bai-tap1/bai-tap1.component';
import { Baitap1HeaderComponent } from './bai-tap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './bai-tap1/baitap1-content/baitap1-content.component';
import { Baitap1SlidebarComponent } from './bai-tap1/baitap1-slidebar/baitap1-slidebar.component';
import { Baitap1FooterComponent } from './bai-tap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2HeaderComponent } from './baitap2/baitap2-header/baitap2-header.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2WhatWeDoComponent } from './baitap2/baitap2-what-we-do/baitap2-what-we-do.component';
import { Baitap2ContactComponent } from './baitap2/baitap2-contact/baitap2-contact.component';
import { Baitap2ListCardComponent } from './baitap2/baitap2-list-card/baitap2-list-card.component';
import { Baitap2CardComponent } from './baitap2/baitap2-list-card/baitap2-card/baitap2-card.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { Baitap3Module } from "./baitap3/baitap3.module";
import { DataBindingModule } from './data-binding/data-binding.module';
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
import {AttributeDirectiveModule} from "./attribute-directive/attribute-directive.module"
import{BaiTapspModule} from "./bai-tapsp/bai-tapsp.module";
import { NgContentComponent } from './ng-content/ng-content.component';
import { ItemCardComponent } from './ng-content/item-card/item-card.component'
import { InteractionModule } from './interaction/interaction.module';
import { BtBusModule } from './bt-bus/bt-bus.module';
@NgModule({
  declarations: [
    AppComponent,
    BaiTap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SlidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2CarouselComponent,
    Baitap2WhatWeDoComponent,
    Baitap2ContactComponent,
    Baitap2ListCardComponent,
    Baitap2CardComponent,
    Baitap2FooterComponent,
    NgContentComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule, Baitap3Module, DataBindingModule, StructuralDirectiveModule,AttributeDirectiveModule,BaiTapspModule,InteractionModule,BtBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
