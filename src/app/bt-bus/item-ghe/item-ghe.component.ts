import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  trangThaiChon: boolean = false;
  @Input() ghe
  @Output() chonGheEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  gheDaChon: boolean = false
  chonGhe()
  {
    
      this.trangThaiChon = !this.trangThaiChon;
      this.chonGheEvent.emit({ghe: this.ghe, trangThaiChon: this.trangThaiChon});
    
   
  }

}
