import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseurl=environment.host;
  constructor(
    public http:HttpClient
  ) { }

  getstudent(){
    return this.http.get(this.baseurl+'allstudent');
  }

  addstudent(data:any){
    return this.http.post(this.baseurl+'savestudent',data);
  }

  updatestudent(data:any, id:any){
    return this.http.put(this.baseurl+'updatestudent/'+id ,data);
  }
  deletestudent(id:any){
   return this.http.delete(this.baseurl+'deletestudent/'+id);
  }
  getByid(id:any){
    return this.http.get(this.baseurl+'studentByid/'+id);
  }
}
