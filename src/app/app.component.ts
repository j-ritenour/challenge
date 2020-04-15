import { Component } from '@angular/core';
import { Contestants } from './contestants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge Mania';
  tab1Name = 'Challenge History';
  tab2Name = 'Quiz';
  bannerPhoto = 'assets/westm.png';
  contestantArray: Contestants[];
  constructor(){
    this.contestantArray = [ 
      new Contestants("Wes Bergman", 33, [3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16], 5, 8, 9, 14),
      new Contestants("Johnny Bananas", 33, [3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16], 5, 8, 9, 14),
    ];
  }
}


