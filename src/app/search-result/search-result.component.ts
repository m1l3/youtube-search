import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'app/search-result/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  @Input() result: SearchResult;

  constructor() {
    console.log("SearchResultComponent:constructor");
  }

}
