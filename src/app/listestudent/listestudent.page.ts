import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-listestudent',
  templateUrl: './listestudent.page.html',
  styleUrls: ['./listestudent.page.scss'],
})
export class ListestudentPage implements OnInit {
student:any;
  constructor(
     private apser:ApiserviceService,
     private route:Router
    ){
    this.getstudent();
  }

  ngOnInit() {
    
  }
  getstudent(){
    this.apser.getstudent().subscribe(data=>{
      console.log('la liste des apprenants', data);
      this.student=data;
    })
  }

  received(data){
    console.log("datoom received", data);
  this.route.navigate(['/updatestudent/'+data.id_student]);
  }
  deletestu(dat){
    this.apser.deletestudent(dat).subscribe(vare=>{
      console.log("Apprenant supprimé avec succès!!");
     this.getstudent();
    })
  }
}
