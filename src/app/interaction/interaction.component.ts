import { Component, OnInit, ViewChild } from '@angular/core';
import { DSPhimComponent} from "./dsphim/dsphim.component"

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DSPhimComponent, {static:false}) tagListmovie: DSPhimComponent;

  constructor() { }

  ngOnInit() {
  }
  addMovie(_maPhim, _tenPhim, _giaPhim, _anhPhim )
  {
    console.log(_maPhim,_tenPhim,_giaPhim,_anhPhim);
    const phim =
    {
      maPhim: _maPhim,
      tenPhim: _tenPhim,
      gia: _giaPhim,
      hinhAnh: _anhPhim
    }
    this.tagListmovie.themPhim(phim);
    
  }

}
