import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  isLogin: boolean = true;
  name: string = "";
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.isLogin = false;
      this.name = JSON.parse(localStorage.getItem("user"));

    }

  }
  login(name, pass) {
    if (name === "cybersoft" && pass === "123") {
      this.isLogin = false;
      this.name = name;
      localStorage.setItem("user", JSON.stringify(name));
    }
  }
}