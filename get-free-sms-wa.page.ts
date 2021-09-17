import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-get-free-sms-wa',
  templateUrl: './get-free-sms-wa.page.html',
  styleUrls: ['./get-free-sms-wa.page.scss'],
})
export class GetFreeSmsWaPage implements OnInit {

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
