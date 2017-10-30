import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'app/search-result/search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent{
  results: SearchResult[];
  loading: boolean;

  constructor() {
    console.log("YouTubeSearchComponent:constructor");
  }
  
  updateResults(results: SearchResult[]): void {
    console.log("YouTubeSearchComponent:Update Results");
    this.results = results;

    //   results.forEach(element => {
    //     console.log(element);  
    //   });

  }

}
