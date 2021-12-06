import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: WeatherService) { }

  ngOnInit(): void {this.getWetherSanjose();
  }

  wether: any = {};
  getWetherSanjose():void{
    this._httpService.requestWetherSanjose()
    .subscribe((data:any)=>{
      this.wether = data;
      console.log("Time by API San Francisco", this.wether);
    });
  }

}
