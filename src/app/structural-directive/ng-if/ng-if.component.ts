import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  status:boolean = true;
  statusLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  Hidden()
  {
    this.status = false;
  }
  Show()
  {
    this.status = true;
  }
  Toggle()
  {
    this.status = !this.status;
  }
  dangXuat()
  {
    this.statusLogin= true;
  }
  dangNhap()
  {
    this.statusLogin = false;
  }
}
