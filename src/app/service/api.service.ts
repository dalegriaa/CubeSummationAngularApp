import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // endpoint
    apiUrl = 'https://localhost:44355/api/CubeSummation';
    data: any = {};
    constructor(private httpClient: HttpClient) { }

    getSumList(): Observable<Sum[]> {
        return this.httpClient.get(this.apiUrl, { observe: 'response' }).pipe(
            map((response: any) => {
                let object: any;
                try {
                    if (typeof response !== 'object') {
                        object = JSON.parse(response);
                        console.log(object);
                    } else {
                        object = response;
                    }
                    console.log(object);
                } catch {
                    object = response;
                }
                return object;
            })
        );
    }
}
export interface Sum {
    inputLine: number;
}
