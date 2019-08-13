import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
  name:string = "CyberSoft";
  name2:string = "";
  constructor() { }

  ngOnInit() {
  }
  eventBinding(value){
    this.name2 = value;
    
  }

}
