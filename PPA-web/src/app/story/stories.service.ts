import {Http, Headers, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class StoriesService {

    private url = "http://localhost:8080/stories"

    constructor(private http: Http) {
    }

    retrieveStories(storiesCounter : number) {
        var options = new RequestOptions({
          search: new URLSearchParams('storyIndex={{' + storiesCounter + '}}')
        });
        return this.http.get(this.url, options)
            .map(res => res.json())
    }

}