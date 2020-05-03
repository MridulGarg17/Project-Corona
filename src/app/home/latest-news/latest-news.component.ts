import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/Interface';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  constructor() { }

  newsArray : INews[]=[]

  ngOnInit(): void {
    this.newsArray = JSON.parse(localStorage.getItem('news'));

  }

}
