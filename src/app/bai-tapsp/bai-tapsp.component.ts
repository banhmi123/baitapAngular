import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tapsp',
  templateUrl: './bai-tapsp.component.html',
  styleUrls: ['./bai-tapsp.component.scss']
})
export class BaiTapspComponent implements OnInit {
  danhSachSP: any = [];
  constructor() { }

  ngOnInit() {
  }
  ThemSP(_masp,_tensp,_giasp)
  {
    console.log(_masp, _tensp,_giasp);
    const sanPham =
    {
      MaSP : _masp,
      TenSP: _tensp,
      GiaSP: _giasp
    };
   this.danhSachSP.push(sanPham);
   console.log(this.danhSachSP);
   
    
  }

}
