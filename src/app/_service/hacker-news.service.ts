import {Injectable} from '@angular/core';


import {HttpClient} from "@angular/common/http";
import {LoggerService} from "../_util/logger.service";
import {ConstantsUrl} from "../_util/constants.url";
import {HackerNewsItem} from "../_data/hacker-news-item";

@Injectable()
export class HackerNewsService {

  constructor(
    private http: HttpClient,
    private LOG: LoggerService
    ) {
  }

  public getNewList = () => {
    this.LOG.info('HackerNewsService.getNewList');
    return this.http.get(ConstantsUrl.REST_HACKER_NEWS + 'newstories.json');
  }

  public getItem = (id: number) => {
    this.LOG.info('HackerNewsService.getItem [' + id + ']');
    return this.http.get<HackerNewsItem>(ConstantsUrl.REST_HACKER_NEWS + 'item/' + id + '.json');
  }


}
