import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Headers} from "@angular/http";

@Injectable()
export class HTTPUserService {
    constructor (private _http: Http) {}

    getUserData(city: string){
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=99ac3d884763185b90a9cb9e8fd095dd"
        return this._http.get(url)
            .map(res => res.json());
    }
}