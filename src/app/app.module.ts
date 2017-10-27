import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { youTubeServiceInjectables } from './you-tube-search/you-tube-search.injectables';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from 'app/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    YouTubeSearchComponent,
    SearchResultComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
