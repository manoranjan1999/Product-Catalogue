import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';

import { CatalogueserviceService } from '../catalogueservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private serviceData:CatalogueserviceService) {

  }

  ngOnInit() {
  }


  title = 'Catalogue';
  text='';
  addProduct1:any;
  
  
  

  public imagePath;
  imgURL: any;
 
  cardImageBase64: string;
  imageBase64 : string;

  addProduct = new FormGroup({
    name1: new FormControl(''),
    price1: new FormControl(''),
    model1 : new FormControl(''),
    generic1: new FormControl(''),
    cname1 :new FormControl('')
    
   })
   

   sendData()
   {
      this.text = this.addProduct.value;
      this.addProduct1=this.text;
      //console.log(this.addProduct1.name1);
      this.serviceData.setData(this.addProduct1.name1);
      this.serviceData.setData(this.addProduct1.price1);
      this.serviceData.setData(this.addProduct1.model1);
      this.serviceData.setData(this.addProduct1.generic1);
      this.serviceData.setData(this.addProduct1.cname1);
      this.serviceData.setData(this.cardImageBase64);
   }

  preview(files)
  {
    if (files.length == 0)
      return;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (e:any) =>
    { 
      this.imgURL = reader.result; 
      const imgBase64Path = e.target.result;
      this.cardImageBase64 = imgBase64Path;
      //console.log(this.cardImageBase64);
    }
    
  }
  

}
