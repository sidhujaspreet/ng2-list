import { Component } from '@angular/core';
import { HTTPUserService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HTTPUserService]
})
export class AppComponent {
  title = 'app works!';
  
  weatherData = {
        humidity: <number> null,
        pressure: <number> null,
        temperature: <string> null,
        wind: <number> null,
        icon: <string> null
    };
  
  constructor(private _httpService:HTTPUserService){}
  
  onGet() {
    let city = 'London';
    this._httpService.getUserData(city)
        .subscribe(
            data => this.processSuccessData(data),
            error => alert(error),
            () => console.log("Finished!"),
        );
  }
  
  processSuccessData(data) {
    this.weatherData = {
        humidity : data.main.humidity,
        pressure : data.main.pressure,
        temperature : Number(data.main.temp - 270).toFixed(2),
        wind : data.wind.speed,
        icon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    };
  }
}
