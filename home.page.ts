import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { AuthenticationService } from '../shared/components/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  barChart: any;
  lineChart: any;
  showSearchBar = false
  constructor(private authService: AuthenticationService,private router:Router) {}

  ngOnInit() {}

  

  ngAfterViewInit() { 
  //  this.barChartMethod();
    // this.doughnutChartMethod();
    // this.lineChartMethod();
  }

  cardAction(state){
    console.log('isOpenClick',state)
    if(state=="expand"){

    }else if(state=="open-default"){

    }else{
      this.router.navigateByUrl('/home/'+state)
    }
  }

  // barChartMethod() {
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [200, 50, 30, 15, 20, 34],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  // lineChartMethod() {
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
  //       datasets: [
  //         {
  //           label: 'Sell per week',
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
  //           spanGaps: false,
  //         }
  //       ]
  //     }
  //   });
  // }


}
