import { Component} from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

  public labels1 : string [] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public donaData1: number [] = [100, 600, 400];
  public labels2 : string [] = ['Cuarto Set', 'Futbol', 'Padel'];

}
