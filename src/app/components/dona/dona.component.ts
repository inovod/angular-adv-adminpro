import { Component, Input} from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  
  @Input() title: string = "Sin Titulo";
  @Input() label: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() dondaData: number[] = [350, 450, 100];

  /// public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  /*public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];*/

  public colors:Color[] = [
    {backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];

}
