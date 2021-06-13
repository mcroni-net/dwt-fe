import { Component, OnInit } from '@angular/core';
import {HackerNewsService} from "../_service/hacker-news.service";
import {LoggerService} from "../_util/logger.service";
import {HackerNewsItem} from "../_data/hacker-news-item";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {

  constructor(
    public hackerNewsService: HackerNewsService,
    private LOG: LoggerService

  ) { }

  isProd = environment.production;
  itemNumberBlock = 30;
  itemIds = [];
  itemDetails: Array<HackerNewsItem> = [];
  displayJson = false;
  itemStep = 10;
  currentItemIndex = 0;

  ngOnInit(): void {
    this.loadNewList();
  }

  public printInfo() {
    this.LOG.info(this.itemDetails);
    console.log("---");
    console.log(this.itemDetails);
    console.log("---");
    this.displayJson = !this.displayJson;
  }


  public loadNewList() {
    this.hackerNewsService.getNewList()
      .subscribe(
        (res: any) => {
          this.LOG.info("HackerNewsList.loadNewList");
          this.LOG.info(res);
          this.itemIds = res;
          this.loadDetail();
        }
      );
  }

  public loadDetail(){
    this.LOG.info("HackerNewsList.loadNewList [" + this.currentItemIndex + "][" + this.itemStep + "]");
    for (let idx = this.currentItemIndex; idx < (this.currentItemIndex + this.itemStep) && idx < this.itemIds.length ; idx++) {
      this.loadItemDetail(this.itemIds[idx]);
    }
    this.currentItemIndex = this.currentItemIndex + 10;
  }

  public loadItemDetail(id: number) {
    this.hackerNewsService.getItem(id)
      .subscribe(
        (res) => {
          this.LOG.info("HackerNewsList.loadItemDetail[" + id + "]");
          this.LOG.info(res);
          this.itemDetails.push(res);
        }
      );
  }

  public getLocation(url: string) {
    const urlElem = document.createElement("a");
    urlElem.href = url;
    return urlElem.hostname;
  }




}
