import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progreso1: number = 15;
  progreso2: number = 30;

  get getProgreso1(){
    return `${this.progreso1}%`;
  }

  get getProgreso2(){
    return `${this.progreso2}%`;
  }

 }
