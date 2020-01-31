import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueserviceService {
  arrayRes:any=[];
  constructor() { }
  getData()
  {
    return this.arrayRes;
  }
  setData(add:any)
  {
    this.arrayRes[this.arrayRes.length] = add;
    
  }
  
}
