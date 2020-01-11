import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class HomeService {

    //  url: string = 'http://localhost:3000/api/';
    url: string = 'https://chart-backend-api.herokuapp.com/api/';

    constructor(private _http: HttpClient) {
    }

    getAllCollectionData() {
        return Observable.create((observer) => {
            return this._http.get(this.url + 'collection/list')
                .subscribe(data => {
                    observer.next(data);
                },
                    err => {
                        console.error(err);
                    });
        });
    }

    getSingleCollectionData(name) {
        return Observable.create((observer) => {
            return this._http.get(this.url + 'collection/single/' + name)
                .subscribe(data => {
                    observer.next(data);
                },
                    err => {
                        console.error(err);
                    });
        });
    }

}
