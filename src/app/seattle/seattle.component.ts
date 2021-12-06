import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  flag: boolean = false;
  cityInfoSeattle: any = {};

  constructor(private _httpService:WeatherService) { }

  ngOnInit(): void {this.getWetherSeattle();
  }

  getWetherSeattle():void{
    this._httpService.requestWetherSeattle()
    .subscribe((data:any)=>{
      this.cityInfoSeattle = data;
      console.log("Time by API Seattle", this.cityInfoSeattle);
    });
  }

}
