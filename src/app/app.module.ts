import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { DocumentsComponent } from './EmployeeDetails/documents/documents.component';
import { ModalsComponent } from './modals/modals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { InboxComponent } from './inbox/inbox.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './main/main.component';
import { MatSortModule} from '@angular/material/sort';
import { DraftComponent } from './draft/draft.component';
import { SendComponent } from './send/send.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeIdentificationComponent } from './EmployeeDetails/employee-identification/employee-identification.component';
import { EmployeeServiceDetailsComponent } from './EmployeeDetails/employee-service-details/employee-service-details.component';
import { AddressComponent } from './EmployeeDetails/address/address.component';
import { FamilyDetailsComponent } from './EmployeeDetails/family-details/family-details.component';
import { BankDetailsComponent } from './EmployeeDetails/bank-details/bank-details.component';
import { PayEntitlementComponent } from './EmployeeDetails/pay-entitlement/pay-entitlement.component';
//  new component
import { EmpMstComponent } from './emp-mst/emp-mst.component';
import { EmpGenDetailComponent } from './emp-mst/emp-gen-detail/emp-gen-detail.component';
import { EmpIdentityComponent } from './emp-mst/emp-identity/emp-identity.component';
import { EmpDateComponent } from './emp-mst/emp-date/emp-date.component';
import { EmpFamilyDetailComponent } from './emp-mst/emp-family-detail/emp-family-detail.component';
import { EmpBankAcDetailComponent } from './emp-mst/emp-bank-ac-detail/emp-bank-ac-detail.component';
import { EmpPayEComponent } from './emp-mst/emp-pay-e/emp-pay-e.component';
import { EmpDocComponent } from './emp-mst/emp-doc/emp-doc.component';
import { EmpAddressComponent } from './emp-mst/emp-address/emp-address.component';
// As
import { EmployeeSelfServiceComponent } from './ess-req/employee-self-service/employee-self-service.component';
import { EmplyeeNomineeUpdateComponent } from './ess-req/employee-self-service/emplyee-nominee-update/emplyee-nominee-update.component';
import { EmployeeDateTypeComponent } from './ess-req/employee-self-service/employee-date-type/employee-date-type.component';
import { UpdateNumberComponent } from './ess-req/employee-self-service/update-number/update-number.component';
import { BankAccNoComponent } from './ess-req/employee-self-service/bank-acc-no/bank-acc-no.component';
import { ESSbuttonComponent } from './ess-req/employee-self-service/essbutton/essbutton.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ESSReqComponent } from './ess-req/ess-req.component';
import { EmployeeDatesComponent } from './EmployeeDetails/employee-dates/employee-dates.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ESSdashboardMenuComponent } from './ess-req/ess-dashboard/essdashboard-menu/essdashboard-menu.component';
import { ESSDashboardComponent } from './ess-req/ess-dashboard/ess-dashboard.component';
import { RequestComponent } from './ess-req/ess-siloane/request/request.component';
import { EssSiloanDeductionComponent } from './ess-req/ess-siloan-deduction/ess-siloan-deduction.component';
// bbb
import { ESSRequestForwardComponent } from './ess-request-forward/ess-request-forward.component';
import { EssPersonalComponent } from './ess-request-forward/ess-personal/ess-personal.component';
import { EssEmpDateTypeComponent } from './ess-request-forward/ess-emp-date-type/ess-emp-date-type.component';
import { EssNomineeUpdateComponent } from './ess-request-forward/ess-nominee-update/ess-nominee-update.component';
import { EssOtherNumberUpdateComponent } from './ess-request-forward/ess-other-number-update/ess-other-number-update.component';
import { EssBankAccountChangeRequestComponent } from './ess-request-forward/ess-bank-account-change-request/ess-bank-account-change-request.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EmployeeProfileComponent,
    DocumentsComponent,
 
    ModalsComponent,
    EmployeemasterComponent,
    EmployeRegistrationComponent,
    InboxComponent,
    MainComponent,
    DraftComponent,
    SendComponent,
    EmployeeDetailsComponent,
    EmployeeIdentificationComponent,
    EmployeeServiceDetailsComponent,
    AddressComponent,
    FamilyDetailsComponent,
    BankDetailsComponent,
    PayEntitlementComponent,

    // new
    EmpMstComponent,
    EmpGenDetailComponent,
    EmpIdentityComponent,
    EmpDateComponent,
    EmpFamilyDetailComponent,
    EmpBankAcDetailComponent,
    EmpPayEComponent,
    EmpDocComponent,
    EmpAddressComponent,
    // as
    EmployeeSelfServiceComponent,
    EmplyeeNomineeUpdateComponent,
    EmployeeDateTypeComponent,
    UpdateNumberComponent,
    BankAccNoComponent,
    ESSbuttonComponent,
    LandingPageComponent,
    ESSReqComponent,
    EmployeeDatesComponent,
    ESSdashboardMenuComponent,
    ESSDashboardComponent,
    RequestComponent,
    EssSiloanDeductionComponent,
    // bb
    ESSRequestForwardComponent,
    EssPersonalComponent,
    EssEmpDateTypeComponent,
    EssNomineeUpdateComponent,
    EssOtherNumberUpdateComponent,
    EssBankAccountChangeRequestComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
   
    MatStepperModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // bb


  
    
    
   
  ],
  providers:[{ provide: MAT_DATE_LOCALE,useValue: 'MY_FORMATS'},
 ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
