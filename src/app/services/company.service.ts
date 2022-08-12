import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  readonly baseURL='https://localhost:44353/api/Company'
  //formData:Company=new Company();
  //list:Company[];

  post(data:any){
    return this.http.post<any>(this.baseURL,data);
  }
  get(){
    return this.http.get<any>(this.baseURL);
  }

  put(data:any,CompanyID:number) {
    return this.http.put<any>(`${this.baseURL}/${CompanyID}`,data)
    //return this.http.put(`${this.baseURL}/${this.formData.CompanyID}`, this.formData);
  }

  delete(CompanyID: number) {
    return this.http.delete<any>(`${this.baseURL}/${CompanyID}`);
    //return this.http.delete(`${this.baseURL}/${CompanyID}`);
  }

  refreshList() {
    //this.http.get(this.baseURL)
      //.toPromise()
      //.then(res =>this.list = res as Company[]);
  }
}
