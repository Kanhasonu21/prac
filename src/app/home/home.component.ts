import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{HomeService} from '../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  cities: Array<any>;
  codes: Array<any>;


  constructor(private fb: FormBuilder,
    private _HomeService:HomeService)
  { 
  }

  ngOnInit() {
    this.registerForm= this.fb.group({
      countryName:[''],
      stateName:[''],
      countryCode:['']

    })

  }
  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'], codes: ['G-123', 'G-345', 'G-456'] },
    { name: 'Spain', cities: ['Barcelona'], codes: ['S-123', 'S-345', 'S-986'] },
    { name: 'India', cities: ['Delhi','Punjab',"Bihar"], codes: ['IN-123', 'IN-345', 'IN-986'] },
    { name: 'USA', cities: ['Downers Grove', 'Washigton', 'New Mexico'], codes: ['US-123', 'US-385', 'US-456'] },
    { name: 'Mexico', cities: ['Puebla'], codes: ['M-123', 'M-345', 'M-389'] },
    { name: 'China', cities: ['Beijing'], codes: ['C-123', 'C-345', 'C-456'] },
  ];
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
    this.codes = this.countryList.find(con => con.name == count).codes;
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
