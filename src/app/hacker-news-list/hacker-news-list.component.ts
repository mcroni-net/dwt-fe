import { Component, OnInit } from '@angular/core';
import {HackerNewsService} from "../_service/hacker-news.service";
import {LoggerService} from "../_util/logger.service";
import {HackerNewsItem} from "../_data/hacker-news-item";

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

  itemNumberBlock = 30;
  itemIds = [];
  itemDetails: Array<HackerNewsItem> = [];
  displayJson = false;

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
          for (let idx = 0; idx < 3; idx++) {
            this.loadItemDetail(this.itemIds[idx]);
          }
        }
      );
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

}
