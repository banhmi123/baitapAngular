import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ItemGheComponent } from '../item-ghe/item-ghe.component';

@Component({
  selector: 'app-danhsach-ghe',
  templateUrl: './danhsach-ghe.component.html',
  styleUrls: ['./danhsach-ghe.component.scss']
})
export class DanhsachGheComponent implements OnInit {
  mangGhe: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: true },

  ];
  mangGheDangDat: any = [];
  @ViewChildren(ItemGheComponent) tagGheItem: QueryList<ItemGheComponent>;
  tongTien: number = 0;
  TinhTien(){
    this.tongTien=0;
    this.mangGheDangDat.map(item=>{
      this.tongTien+=item.Gia;
    })
  }

  chonGhe(gheEmiter) {
    if (gheEmiter.trangThaiChon) {
      this.mangGheDangDat.push(gheEmiter.ghe)
    } else {
      this.mangGheDangDat.map((item, index) => {
        if (gheEmiter.ghe.SoGhe === item.SoGhe)
         this.mangGheDangDat.splice(index, 1)
      })
    }
    console.log(this.mangGheDangDat);
    this.TinhTien();
  }
  huyGhe(soGhe, stt) {
    this.mangGheDangDat.splice(stt, 1);

    this.tagGheItem.map(item => {
      if (item.ghe.SoGhe === soGhe) item.trangThaiChon = false
    })

    console.log(this.mangGheDangDat);
    this.TinhTien();
  }

  xacNhan() {
    this.mangGheDangDat.map(item1 => {
      this.mangGhe.map(item2 => {
        if (item1.SoGhe === item2.SoGhe) item2.TrangThai = true;
      })
    })
    this.mangGheDangDat = [];
    
  }
  constructor() { }

  ngOnInit() {
  }

}
