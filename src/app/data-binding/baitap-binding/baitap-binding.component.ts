import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {
  email:string= "";
  name:string = "CyberSoft";
  name2:string = "";
  constructor() { }

  ngOnInit() {
  }
  eventBinding(value){
    this.name2 = value;
    
  }
}
