import { Injectable } from '@angular/core';
import { Netlist } from './models/Netlist';
import { AppConstants } from './app-constants';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { HttpClientModule, HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl: string = "https://localhost:44339/api/Values" ;
    data: Netlist;
    constructor(public httpService: HttpClient) { }

    getRoles(url: string): Observable<Netlist> {
        return this.httpService.get<Netlist>(this.apiUrl + "/" + url)
            .pipe(
                catchError(this.handleError)
            );
    }
    getLinks(url: string): Observable<Netlist> {
        return this.httpService.get<Netlist>(this.apiUrl + "/" + url).pipe(catchError(this.handleError));
    }

    getLinkData(url: string, id: number): Observable<Netlist> {
        const newurl = `${this.apiUrl + "/" + url + "/"+id}`;
        return this.httpService.get<Netlist>(newurl).pipe(catchError(this.handleError));
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}

