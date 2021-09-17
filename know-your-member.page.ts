import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  Chart  from 'chart.js/auto';

@Component({
  selector: 'app-know-your-member',
  templateUrl: './know-your-member.page.html',
  styleUrls: ['./know-your-member.page.scss'],
})
export class KnowYourMemberPage implements OnInit {

 doughnutChart: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: '# of Votes',
          data: [58, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          backgroundColor: [
            'rgba(20, 121, 213)'
          ],
          hoverBackgroundColor: [
            '#1479D5'
          ]
        }]
      }
    });
  }
}
