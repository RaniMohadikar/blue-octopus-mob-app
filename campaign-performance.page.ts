/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-campaign-performance',
  templateUrl: './campaign-performance.page.html',
  styleUrls: ['./campaign-performance.page.scss'],
})
export class CampaignPerformancePage implements OnInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('doubleLineCanvas') doubleLineCanvas: ElementRef;

  barChart: any;
  doubleLineChart: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doubleLineChartMethod();

  }

  barChartMethod() {
    // this.barChart = new Chart(this.barCanvas.nativeElement, {
    //   type: 'bar',
    //   data: {
    //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [60, 110, 200, 80, 150, 90, 70],
    //       backgroundColor: [
    //         'rgba(205, 211, 223)',
    //         'rgba(205, 211, 223)',
    //         'rgba(20, 121, 213)',
    //         'rgba(205, 211, 223)',
    //         'rgba(205, 211, 223)',
    //         'rgba(205, 211, 223)',
    //         'rgba(205, 211, 223)'
    //       ],
    //       borderWidth: 0
    //     }]
    //   },
    // options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
  }
  doubleLineChartMethod() {

    // this.doubleLineChart = new Chart(this.doubleLineCanvas.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ['15 April','','','','21 April'],
    //     datasets: [
    //       {
    //         data: [250, 260, 210, 200, 250],
    //         backgroundColor: 'rgba(40,125,200,.5)',
    //         borderColor: 'rgb(40,100,200)',
    //         fill: true,
    //         lineTension: 0,
    //         radius: 5,
    //         label: 'Point 01'
    //       },
    //       {
    //         data: [470, 500, 450, 240, 270],
    //         backgroundColor: 'rgba(240,78,71,.5)',
    //         borderColor: 'rgb(240,78,71)',
    //         fill: true,
    //         lineTension: 0.2,
    //         radius: 5,
    //         label: 'Point 02'
    //       }
    //     ]
    //   },

    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       position: 'top',
    //       fontSize: 12,
    //       fontColor: '#666'
    //     },
    //     legend: {
    //       display: true,
    //       position: 'bottom',
    //       labels: {
    //         fontColor: '#999',
    //         fontSize: 14
    //       }
    //     }
    //   }
    // });
  }
}
