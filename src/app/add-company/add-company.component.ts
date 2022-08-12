import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Company } from '../models/Company';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyForm !: FormGroup;
  constructor(public service:CompanyService,
    private toastr:ToastrService,private formBuilder:FormBuilder,@Inject(MAT_DIALOG_DATA)public editData:any,private dialogref:MatDialogRef<AddCompanyComponent> ) { }


  ngOnInit(): void {
    this.companyForm=new FormGroup({
      Name: new FormControl(null, Validators.required),
      CEO: new FormControl(null, Validators.required),
      Turnover:new FormControl(null, Validators.required),
      Website:new FormControl(null, Validators.required),
      StockExchange:new FormControl(null, Validators.required),
      CreatedBy:new FormControl(null, Validators.required)
    })
    if(this.editData){
      this.companyForm.controls['CompanyName'].setValue(this.editData.CompanyName);
      this.companyForm.controls['CompanyCEO'].setValue(this.editData.CompanyCEO);
      this.companyForm.controls['CompanyTurnover'].setValue(this.editData.CompanyTurnover);
      this.companyForm.controls['CompanyWebsite'].setValue(this.editData.CompanyWebsite);
      this.companyForm.controls['StockExchange'].setValue(this.editData.StockExchange);
      this.companyForm.controls['Created_By'].setValue(this.editData.Created_By);
    }
  }
AddCompany()
{
  var company=this.companyForm.value
  var companyFormData=new Company(0,company.Name,company.CEO,company.Turnover,company.Website,company.StockExchange,company.CreatedBy)
  if(this.companyForm.valid){
    this.service.post(companyFormData)
    .subscribe({
      next:(res)=>{
        this.toastr.success('Submitted successfully','Company Registered');
        this.companyForm.reset();
        this.dialogref.close('save');
      },
      error:()=>{
        this.toastr.error('Error while adding Company','Error');
      }
    })
  }
  }

}
