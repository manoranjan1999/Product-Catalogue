import { Component, OnInit } from '@angular/core';
import { CatalogueserviceService } from '../catalogueservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  i:number=0;
  arrayRes1:any=[];
  divArray:Array<any>;
  constructor(private serviceData1:CatalogueserviceService)
  {
    this.arrayRes1=this.serviceData1.getData();
    console.log(this.arrayRes1);
    this.divArray=new Array(this.arrayRes1.length/6);
  }

 
  ngOnInit() {
   //this.arrayRes1= this.serviceData1.getData();
  }


}
