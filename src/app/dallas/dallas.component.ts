import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService:WeatherService) { }

  ngOnInit(): void {
    this.getWetherDallas();
  }

  wether: any = {};
  getWetherDallas():void{
    this._httpService.requestWetherDallas()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Seattle", this.wether);
    });
  }

}
