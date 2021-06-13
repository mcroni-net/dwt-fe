export interface HackerNewsItem {
  id: number;
  descendants: number;
  by: string;
  kids: number[];
  score: number;
  time: number;
  title: string;
  text: string;
  type: string;
  url: string;
}
