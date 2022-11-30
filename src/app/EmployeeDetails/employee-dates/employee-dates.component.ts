import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-dates',
  templateUrl: './employee-dates.component.html',
  styleUrls: ['./employee-dates.component.css']
})
export class EmployeeDatesComponent implements OnInit {
  saveEmpdate!: FormGroup;
  submitted!: boolean;
  essEmployeeDatesSavedata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.saveEmpdate = this.formbuilder.group({
      JoiningDateService : ['',Validators.required],
      DatePresentdesgination : ['',Validators.required],
      DateJoiningPresentDDO : ['',Validators.required],
      DateConfirmation : ['',Validators.required],
      IncrementOptedDate : ['',Validators.required],
      ChargeTakenDate : ['',Validators.required],
      SuperanuationDate : ['',Validators.required],
      JoiningTime : ['',Validators.required],
      AppointmentOrderDate : ['',Validators.required],

    })


  }
  
  OnSubmit(){
    this.submitted = true;
    let  data = {
      "dateofJoinRegularService":this.saveEmpdate.controls["JoiningDateService"].value,
      "dateofPresentDesgination":this.saveEmpdate.controls["DatePresentdesgination"].value,
      "dateJoiningPresentDDO":this.saveEmpdate.controls["DateJoiningPresentDDO"].value,
      "dateConfirmation":this.saveEmpdate.controls["DateConfirmation"].value,
      "annualIncrementOptedDate":this.saveEmpdate.controls["IncrementOptedDate"].value,
      "superanuationDate":this.saveEmpdate.controls["SuperanuationDate"].value,
      "joining":this.saveEmpdate.controls["ChargeTakenDate"].value,
      "joiningTime":this.saveEmpdate.controls["JoiningTime"].value,
      "appointmentOrderDate":this.saveEmpdate.controls["AppointmentOrderDate"].value,
      }
 
     // getServiceCategoryg
     this.apiService.essEmployeeDatesSave(data).subscribe(res => {
      if (res.data.status = 200) {
        this.essEmployeeDatesSavedata = res.data
      }
   
      console.log(this.essEmployeeDatesSavedata)
    })
     
  }
  maxDate = new Date();
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
