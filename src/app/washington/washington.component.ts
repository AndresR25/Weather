import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  constructor(private _httpService: WeatherService) { }

  ngOnInit(): void {
    this.getWetherWashington();
  }

  cityInfoWashington: any = {};
  getWetherWashington():void{
    this._httpService.requestWetherWashington()
    .subscribe((data:any)=>{
      this.cityInfoWashington = data;
      console.log("Time by API Washington", this.cityInfoWashington);
    });
  }

}
