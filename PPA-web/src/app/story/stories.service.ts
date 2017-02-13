import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class StoriesService {

    private url = "http://localhost:8080/stories"

    constructor(private http: Http) {
    }

    retrieveStories() {
        return this.http.get(this.url)
            .map((response : Response) => response.json())
    }

}