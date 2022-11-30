import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit {
  FamilyDetails: any;
  Genderdata: any;
  MaritalStatusdata: any;
  FamilyRelationdata: any;
  SchemeTypedata: any;
  essEmpFamilyDetailsSavedata: any;
  getSchemeTypedata: any;
 

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
     this.FamilyDetails = this.formbuilder.group({
      name: ['', Validators.required],
      relationship : ['-1',Validators.required],
      Gender : ['-1',Validators.required],
      Maritalstatus : ['-1',Validators.required],
      // relationship : ['-1',Validators.required]
      // relationship : ['-1',Validators.required]

     })
     

     //////////// getGender
     


   this.apiService.getGender().subscribe(res => {
    if (res.data.status = 200) {
      this.Genderdata = res.data
    }
    console.log(this.Genderdata)
  })

     //////////// getMaritalStatus

     this.apiService.getMaritalStatus().subscribe(res => {
      if (res.data.status = 200) {
        this.MaritalStatusdata = res.data
      }
      console.log(this.MaritalStatusdata)
    })




     //////////// getFamilyRelation

     this.apiService.getFamilyRelation().subscribe(res => {
      if (res.data.status = 200) {
        this.FamilyRelationdata = res.data
      }
      console.log(this.FamilyRelationdata)
    })

      //////////// getFamilyRelation

      this.apiService.getSchemeType().subscribe(res => {
        if (res.data.status = 200) {
          this.getSchemeTypedata = res.data
        }
        console.log(this.SchemeTypedata)
      })

 


  }

  OnSubmit(){
    alert(this.FamilyDetails.controls["name"].value,)
    let data ={
      "name": this.FamilyDetails.controls["name"].value,
      "relationship": this.FamilyDetails.controls["relationship"].value,
      "dob": this.FamilyDetails.controls["dob"],
      "gender": this.FamilyDetails.controls["Gender"],
      "maritalStatus": "fug",
      "physiccallyDisability": "no",
      "percentageofDisability": "110",
      "dependent": "no",
      "employed": "yes",
      "nominee": [
          {
              "schemes": "fug",
              "nameofNominee": "hhikh",
              "relation": "jhoi",
              "share": "5887946"
          }
      ]
  }
      this.apiService.essEmpFamilyDetailsSave(data).subscribe(res => {
        if (res.data.status = 200) {
          this.essEmpFamilyDetailsSavedata = res.data
        }
     
        console.log(this.essEmpFamilyDetailsSavedata)
      })
      
  }

  
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
