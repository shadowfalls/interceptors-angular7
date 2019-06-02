import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    constructor(
        private http: HttpClient
    ) {}

    getData() {
        // you can put any url that works here. For simplicity, I am using this as an example.
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        return this.http.get(url);
    }
}
