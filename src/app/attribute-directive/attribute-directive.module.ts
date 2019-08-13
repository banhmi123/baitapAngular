import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HightLinghtDirective } from './hight-linght.directive';



@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HightLinghtDirective],
  exports: [AttributeDirectiveComponent ],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }
