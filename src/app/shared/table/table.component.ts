import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {IState, ICity, ICountry} from '../../Interface'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {


  dataSource:any;
  columnsToDisplay = ['state', 'active', 'confirmed', 'recovered', 'deaths'];
  expandedElement: IState | null;

  Data:IState[]=[];
  CountryData: ICountry = {active:'',confirmed:'',deaths:'',recovered:''};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(){
    this.apiService.getStats().subscribe(data=>{
        console.log(data);
        this.CountryData.active = data[0].active;
        this.CountryData.confirmed = data[0].confirmed;
        this.CountryData.recovered = data[0].recovered;
        this.CountryData.deaths =data[0].deaths;

        data.splice(0,1);

        this.dataSource=data;
     });
     
  }

 
  
}
