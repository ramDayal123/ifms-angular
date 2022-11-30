import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';


 @Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})



export class InboxComponent implements AfterViewInit,OnInit {
   getInboxdatadata: any;
   getInboxdata :any;
   getInboxdataadata: any;
 


   constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }
   ngAfterViewInit(): void {
     throw new Error('Method not implemented.');
   }
  
   ngOnInit(): void {
 
     let requestedData = {
      "officeId":2,
       "userId":1
    }
   
    this.apiService.getInboxdata(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.getInboxdatadata = res.data
      }
    
      // console.log(this.getInboxdatadata)
    })

   }
 
 
 }
 