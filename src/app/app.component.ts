import { Component, OnInit } from '@angular/core';
import { INews } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Project-Corona';
  news: INews[] = [{
    title: "Corona Update",
    description: "Lockdown Remains to be continued for 2 more weeks. "
  },
  {
    title: "Corona Update 2",
    description: "rate of increasing cornoa patients is constant avid locakdown."

  }]

  ngOnInit(){
    if(!localStorage.getItem('news'))
    localStorage.setItem('news',JSON.stringify(this.news));
  }

  

}
