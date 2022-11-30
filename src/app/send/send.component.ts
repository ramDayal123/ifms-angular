import {AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface Student {
  ReferenceNo:string;
  Discription:string;
  Initiator:string;
  InitiatorDate:string;
  RequestedForm: bigint;
  pendingSince:string;
  Action:string;
  Remarks:string;
}

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements AfterViewInit,OnInit{
  getInboxdatadata: any;
  student: Student[] = [];
  public displayedColumns = ['ReferenceNo', 'Discription', 'Initiator', 'InitiatorDate', 'RequestedForm', 'pendingSince','Action','Remarks' ];
  public dataSource = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute,private apiService: ApiService,) { 

  }
    ngOnInit() {
      let requestedData = {
        "officeId":2,
         "userId":1
      }
  
      this.apiService.getInboxdata(requestedData).subscribe(res => {
        if (res.data.status = 200) {
          this.getInboxdatadata = res.data
          this.dataSource.data = res.data;
        }
      
        // console.log(this.getInboxdatadata)
      })
  
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  