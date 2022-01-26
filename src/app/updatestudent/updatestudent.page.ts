import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.page.html',
  styleUrls: ['./updatestudent.page.scss'],
})
export class UpdatestudentPage implements OnInit {
  OneStud:any={}

  constructor(
    private apser:ApiserviceService,
    private activities:ActivatedRoute) {
      console.log(this.activities.snapshot.params);
      
     }

  ngOnInit() {
     this.getstudentByid();
  }
  getstudentByid(){
    console.log("infostudent",this.activities.snapshot.params);
    
    this.apser.getByid(this.activities.snapshot.params.id).subscribe(data=>{
      console.log('identifiant apprenant', data);
     
      this.OneStud=data;
      
    })
  }
  register(moundre){
    this.apser.updatestudent(moundre.value,this.OneStud).subscribe(data=>{
      console.log( 'Nouveau Apprenant',data);
    })
  }

}
