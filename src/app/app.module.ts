import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './hacker-news-list/hacker-news-list.component';
import {HackerNewsService} from "./_service/hacker-news.service";
import {HttpClientModule} from "@angular/common/http";
import {LoggerService} from "./_util/logger.service";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],

  providers: [
    {
      provide: HackerNewsService,
      useClass: HackerNewsService
    },
    {
      provide: LoggerService,
      useClass: LoggerService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
