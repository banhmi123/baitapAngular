import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {ItemPhimComponent} from "./../item-phim/item-phim.component";
@Component({
  selector: 'app-dsphim',
  templateUrl: './dsphim.component.html',
  styleUrls: ['./dsphim.component.scss']
})
export class DSPhimComponent implements OnInit {

  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<ItemPhimComponent>



  danhSachPhim = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"assets/images/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh:"assets/images/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh:"assets/images/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh:"assets/images/insideout.jpg"},
  ];
  
  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ];
  constructor() { }

  ngOnInit() {
  }
  thich(phimabc)
  {
    console.log(phimabc);
    // this.danhSachLike.map(item =>{
    //   if(item.maPhim === phimabc.maPhim)
    //   {
    //     item.soLike++;
    //   }
    // });
    let movie =this.danhSachLike.find(item =>{
      return item.maPhim === phimabc.maPhim;

    });
    console.log(movie);
    movie.soLike++;
    
  }
  themPhim(phimabc)
  {
    this.danhSachPhim.push(phimabc);
  }
  ViewChildren()
  {
    this.tagListItemPhim.map( item =>{
      console.log(item);
      if(item.phim.maPhim === 2)
      {
        item.phim.gia = 1000000;
      }
    })
  }
}
