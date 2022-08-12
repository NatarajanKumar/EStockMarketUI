import { Component, OnInit,ViewChild } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Company } from '../models/Company';
import {MatDialog} from '@angular/material/dialog';
import { AddCompanyComponent } from '../add-company/add-company.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  displayedColumns: string[] = ['companyID', 'companyName', 'companyCEO', 'companyTurnover','companyWebsite','stockExchange','created_By','Created_At','Action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  result:Company[];
  test:string;
  dataSource: MatTableDataSource<Company>;


//  Test1: Company[] = [
//   {CompanyID: 1, CompanyName: 'Hydrogen', CompanyCEO: 'nan',CompanyTurnover:7,CompanyWebsite:'gg',Created_By:'nat',StockExchange:'BSE'}];

  constructor(public service:CompanyService,
    private toastr:ToastrService,public dialog: MatDialog) { }

    ngOnInit(): void {
      //this.service.refreshList();
      this.dataSource=new MatTableDataSource();

      this.getAllCompany();
    }

    openDialog() {
      this.dialog.open(AddCompanyComponent, {
        width:'50%'
      });
    }
    getAllCompany(){
      this.service.get()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.test='Error while fetching the Records!!';
          this.result=res;
          this.dataSource = res;
          console.log(this.dataSource);
          // this.dataSource.sort = this.sort;
          // this.dataSource.paginator = this.paginator;
        },
        error:(err)=>{
          alert("Error while fetching the Records!!");
        }

      })
    }
    editCompany(row:any){
      this.dialog.open(AddCompanyComponent,{
        width:'30%',
        data:row
      })
    }

    applyFilter(event: Event) {
      // const filterValue = (event.target as HTMLInputElement).value;
      // this.dataSource.filter = filterValue.trim().toLowerCase();

      // if (this.dataSource.paginator) {
      //   this.dataSource.paginator.firstPage();
      // }
    }


  // onSubmit(form: NgForm) {
  //   if (this.service.formData.CompanyID == 0)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  // insertRecord(form: NgForm) {
  //   this.service.post().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //       this.toastr.success('Submitted successfully', 'Company Registered')
  //     },
  //     err => { console.log(err); }
  //   );
  // }

  // updateRecord(form: NgForm) {
  //   this.service.put().subscribe(
  //     res => {
  //       this.resetForm(form);
  //       this.service.refreshList();
  //       this.toastr.info('Updated successfully', 'Company Detail Updated')
  //     },
  //     err => { console.log(err); }
  //   );
  // }


  // resetForm(form: NgForm) {
  //   form.form.reset();
  //   this.service.formData = new Company();
  // }
  // populateForm(selectedRecord: Company) {
  //   this.service.formData = Object.assign({}, selectedRecord);
  // }
  // onDelete(id: number) {
  //   if (confirm('Are you sure to delete this record?')) {
  //     this.service.delete(id)
  //       .subscribe(
  //         res => {
  //           this.service.refreshList();
  //           this.toastr.error("Deleted successfully", 'Company Detail deleted');
  //         },
  //         err => { console.log(err) }
  //       )
  //   }
  // }


}
