import { Component , OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'animal-project';
  hose:any;

  constructor(){
  }
  ngOnInit(): void {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    let a = arr.length;

    while (a) {
      let j = Math.floor( Math.random() * a );
      let t = arr[--a];
      arr[a] = arr[j];
      arr[j] = t;
    }
    this.hose = arr;
    console.log(this.hose[0]);
  }
  public column1 = [
    'hose_1.jpg',
    'hose_7.jpg',
    'hose_13.jpg',
    'hose_19.jpg',
  ]
  public column2 = [
    'hose_2.jpg',
    'hose_8.jpg',
    'hose_14.jpg',
    'hose_20.jpg',
  ]
  public column3 = [
    'hose_3.jpg',
    'hose_9.jpg',
    'hose_15.jpg',
    'hose_21.jpg',
  ]
  public column4 = [
    'hose_4.jpg',
    'hose_10.jpg',
    'hose_16.jpg',
    'hose_22.jpg',
  ]
  public column5 = [
    'hose_5.jpg',
    'hose_11.jpg',
    'hose_17.jpg',
    'hose_23.jpg',
  ]
  public column6 = [
    'hose_6.jpg',
    'hose_12.jpg',
    'hose_18.jpg',
    'hose_24.jpg',
  ]

  public drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
                      event.previousIndex,
                      event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
