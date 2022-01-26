import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.page.html',
  styleUrls: ['./addstudent.page.scss'],
})
export class AddstudentPage implements OnInit {

  constructor(
    private apser:ApiserviceService,
    private route:Router
    ) { }

  ngOnInit() {
  }
  register(moundre){
  this.apser.addstudent(moundre.value).subscribe(data=>{
    console.log( 'Nouveau Apprenant',data);
    this.route.navigateByUrl('/accueil');
  })
  
  
}
}
