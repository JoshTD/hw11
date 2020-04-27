import { Component } from '@angular/core';
import { MyDets } from './shared/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dets: MyDets[] = [
    { id: 0, name: 'first', status: getRandBool() },
    { id: 1, name: 'second', status: getRandBool() },
    { id: 2, name: 'third', status: getRandBool() },
    { id: 3, name: 'fourth', status: getRandBool() },
    { id: 4, name: 'fifth', status: getRandBool() },
    { id: 5, name: 'sixth', status: getRandBool() },
    { id: 6, name: 'seventh', status: getRandBool() },
    { id: 7, name: 'eighth', status: getRandBool() },
    { id: 8, name: 'ninth', status: getRandBool() },
    { id: 9, name: 'tenth', status: getRandBool() }
  ];

  onChange(id: number) {
    setTimeout(() => {
      this.dets[id].status = !this.dets[id].status;
    }, 200);
  }
  onDelete(id: number) {
    let index = this.dets.findIndex((det) => det.id === id);
    if (index !== -1) {
      this.dets.splice(index, 1);
    }
  }
  onAddDet(det: MyDets) {
    let id = this.dets.length > 0 ? this.dets[this.dets.length - 1].id + 1 : 0;
    det.id = id;
    this.dets.push(det);
  }
}
function getRandBool() {
  return Math.round(Math.random()) ? false : true;
}
