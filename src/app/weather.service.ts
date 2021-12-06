import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }
  requestWetherSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherSanjose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5392171&appid=34dc26041c2b371e9162b92b8348d971');
  }

  requestWetherBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherWashington(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }

  requestWetherChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=cf2afc9d3eb1ff2bce9b6b1e42297641');
  }
}
