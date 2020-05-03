import { Component, OnInit, Input } from '@angular/core';
import { ICity } from 'src/app/interface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.scss']
})
export class CityTableComponent implements OnInit {

  
  @Input() CityData: ICity[];
  dataSource:any;

  constructor() { }

  

  ngOnInit(): void {
    this.dataSource = this.CityData;
  }


  columnsToDisplay: string[] = ['district', 'active', 'confirmed', 'deaths', 'recovered'];
  

}


const districtData : ICity[]=[
  {
    active: "6229",
    confirmed: "7628",
    deaths: "323",
    recovered: "1076",
    district: "Maharashtra",
  },
  {
    active: "2656",
    confirmed: "3071",
    deaths: "133",
    recovered: "282",
    district: "Gujarat",
  },
];