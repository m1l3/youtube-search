import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { SearchResult } from "app/search-result/search-result.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export let YOU_TUBE_API_KEY: string = "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";
export let YOU_TUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {

    constructor(
        private http: Http,
        @Inject(YOU_TUBE_API_KEY) private apiKey: string,
        @Inject(YOU_TUBE_API_URL) private apiUrl: string) {

    }

    search(query: string): Observable<SearchResult[]> {
        const params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        const queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.high.url
                    });
                });
            });
    }

}