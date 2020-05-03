export interface IState {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;
    state: string;
    districtData: ICity[];
  }
 
  export interface ICity {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;
    district: string;
  }

  export interface ICountry {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;

  }

  export interface INews{
    
    title:string;
    description : string;
  }
 