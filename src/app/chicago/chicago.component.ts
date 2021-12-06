import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: WeatherService) { }

  ngOnInit(): void {this.getWetherChicago();
  }

  wether: any = {};
  getWetherChicago():void{
    this._httpService.requestWetherChicago()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Chicago", this.wether);
    });
  }


}
