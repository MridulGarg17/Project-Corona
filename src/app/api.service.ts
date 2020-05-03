import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IState, ICity,ICountry} from '../app/Interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }
  
  districtDataResult: any;
  stateDataResult: any;
  finalResult:any;

  getStateData()
  {
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.covid19india.org/data.json';
      this.httpclient.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.stateDataResult = res;
            resolve();
          }
        );
    });
    return promise;
  }

  getDistrictData()
  {
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.covid19india.org/state_district_wise.json';
      this.httpclient.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.districtDataResult = res;
            resolve();
          }
        );
    });
    return promise;
  }


  getStats():Observable< IState[]>{
    return Observable.create(obs=>{
      Promise.all([this.getDistrictData(),this.getStateData()]).then((data)=>{
        const states = Object.keys(this.districtDataResult).filter(this.removeUnknown);
      const result = [];
      states.map((stateName) => {
      result[stateName] = Object.keys(
        this.districtDataResult[stateName]['districtData']
      ).filter(this.removeUnknown);
      });
      var i;
      var states1 : IState[] = [];
      var countryData : ICountry;
      countryData = {active:this.stateDataResult.statewise[0].active, confirmed:this.stateDataResult.statewise[0].confirmed, deaths:this.stateDataResult.statewise[0].deaths, recovered:this.stateDataResult.statewise[0].recovered}
      for (i = 0; i < this.stateDataResult.statewise.length; i++) {
      var dists : ICity[] = [];
      var stat: IState;
      stat = {active:'', recovered:'', deaths:'', confirmed:'', districtData:[], state:''};
      if(result[this.stateDataResult.statewise[i].state]!=undefined && result[this.stateDataResult.statewise[i].state]!= null)
      {
        result[this.stateDataResult.statewise[i].state].forEach(element => {
        var dist : ICity
        dist = {active:'',confirmed:'',deaths:'', district:'', recovered:''};
        dist.active = this.districtDataResult[this.stateDataResult.statewise[i].state].districtData[element].active;
        dist.confirmed = this.districtDataResult[this.stateDataResult.statewise[i].state].districtData[element].confirmed;
        dist.recovered = this.districtDataResult[this.stateDataResult.statewise[i].state].districtData[element].recovered;
        dist.deaths = this.districtDataResult[this.stateDataResult.statewise[i].state].districtData[element].deceased;
        dist.district = element;
        dists.push(dist);
      });
    }
      stat.active = this.stateDataResult.statewise[i].active
      stat.confirmed = this.stateDataResult.statewise[i].confirmed
      stat.deaths = this.stateDataResult.statewise[i].deaths
      stat.districtData = dists;
      stat.recovered = this.stateDataResult.statewise[i].recovered
      stat.state = this.stateDataResult.statewise[i].state;
      states1.push(stat);
      }
      this.finalResult = states1;
     obs.next(this.finalResult);
      });
    
    })
  }
  
  
  removeUnknown(e) {
    return e !== 'Unknown';
  } 



}
