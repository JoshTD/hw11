import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyDets } from 'src/app/shared/det.model';

@Component({
  selector: 'app-adddet',
  templateUrl: './adddet.component.html',
  styleUrls: ['./adddet.component.css']
})
export class AdddetComponent implements OnInit {
  
  name: string;
  status = false;

  @Output() addDet = new EventEmitter<MyDets>();

  constructor() { }

  ngOnInit(): void {}

  onAddDet() {
    this.addDet.emit({
      name: this.name,
      status: this.status
    });
    this.name = '';
  }

}
