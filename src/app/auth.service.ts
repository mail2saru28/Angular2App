import { Injectable } from '@angular/core';
import { Netlist } from './models/Netlist';
import { AppConstants } from './app-constants';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl: string = "https://localhost:44339/api/Values" ;
    data: Netlist;
    constructor(public httpService: HttpClient) { }


    getRoles(): Observable<Netlist> {
        console.log(this.apiUrl);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const options = { headers: headers, observe: 'body', responseType: "json", withCredentials: true };
       return this.httpService.get<Netlist>(this.apiUrl);
       //// return this.httpService.get(`${this.apiUrl}`);
       // return this.httpService.get(this.apiUrl).map((res:any) => res.json()).subscribe((data:any) => {
       //     console.log(data);
           
       // });
    }

    //return this.httpService.get(this.apiUrl).map(res => res.json()).subscribe(data => {
    //      console.log(data);
    //      this.posts = data;
    //  });

}

