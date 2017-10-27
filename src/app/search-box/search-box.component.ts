import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from 'app/search-result/search-result.model';
import { Observable } from 'rxjs/Observable';
import { YouTubeSearchService } from 'app/you-tube-search/you-tube-search.service';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();


  constructor(private youtube: YouTubeSearchService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) //extract the value of the input
      .filter((text: string) => text.length > 1) //do not emit any search strings with length less that one
      .debounceTime(250) // throttle request that come in faster than 250ms (pause)
      .do(() => this.loading.emit(true)) //enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query)) //enable loading
      .switch() //“ignore all search events but the most recent”
      .subscribe(
      //success
      (results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      },
      //error
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      //complete
      () => {
        this.loading.emit(false); 
      }
      );


  };

}