import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService:WeatherService) { }

  ngOnInit(): void {this.getWetherWashington();
  }

  wether: any = {};
  getWetherWashington():void{
    this._httpService.requestWetherWashington()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API Burbank", this.wether);
    });
  }

}
