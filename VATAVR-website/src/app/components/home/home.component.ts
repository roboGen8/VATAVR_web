import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user-service';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public username;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = this.userService.getStoredLoggedInUsername();
    let verticalPoints = [
      { x: new Date(2017, 0, 3), y: 65 },
      { x: new Date(2017, 0, 4), y: 70 },
      { x: new Date(2017, 0, 5), y: 70 },
      { x: new Date(2017, 0, 6), y: 68 },
      { x: new Date(2017, 0, 7), y: 34 },
      { x: new Date(2017, 0, 8), y: 93 },
      { x: new Date(2017, 0, 9), y: 84 },
      { x: new Date(2017, 0, 10), y: 53 },
      { x: new Date(2017, 0, 11), y: 89 },
      { x: new Date(2017, 0, 12), y: 93 },
      { x: new Date(2017, 0, 13), y: 90 },
      { x: new Date(2017, 0, 14), y: 89 },
      { x: new Date(2017, 0, 15), y: 80 },
      { x: new Date(2017, 0, 16), y: 90 }
    ];
    let tangentialPoints = [
      { x: new Date(2017, 0, 3), y: 51 },
      { x: new Date(2017, 0, 4), y: 56 },
      { x: new Date(2017, 0, 5), y: 54 },
      { x: new Date(2017, 0, 6), y: 58 },
      { x: new Date(2017, 0, 7), y: 54 },
      { x: new Date(2017, 0, 8), y: 63 },
      { x: new Date(2017, 0, 9), y: 67 },
      { x: new Date(2017, 0, 10), y: 63 },
      { x: new Date(2017, 0, 11), y: 69 },
      { x: new Date(2017, 0, 12), y: 63 },
      { x: new Date(2017, 0, 13), y: 60 },
      { x: new Date(2017, 0, 14), y: 52 },
      { x: new Date(2017, 0, 15), y: 63 },
      { x: new Date(2017, 0, 16), y: 50 }
    ];
		
		let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      width: 1500,
      axisX:{
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        title: "Accuracy (%)",
        crosshair: {
          enabled: true
        }
      },
      toolTip:{
        shared:true
      },  
      legend:{
        cursor:"pointer",
        verticalAlign: "bottom",
        horizontalAlign: "left",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries
      },
      data: [{
        type: "line",
        showInLegend: true,
        name: "Vertical Accuracy",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        dataPoints: verticalPoints
      },
      {
        type: "line",
        showInLegend: true,
        name: "Tangential Accuracy",
        dataPoints: tangentialPoints
      }]
    });
    chart.render();
    function toogleDataSeries(e){
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else{
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }

  
  
  
}
