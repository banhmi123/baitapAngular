import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  danhSachSinhVien:any=
  [
    {ten:"Minh", tuoi:"22"},
    {ten:"Minh1", tuoi:"23"},
    {ten:"Minh2", tuoi:"24"},
    {ten:"Minh3", tuoi:"25"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
