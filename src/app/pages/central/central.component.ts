import { Component, OnInit, Input, NgModule } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})

export class CentralComponent implements OnInit {

  nombres = [];

  constructor(private peticionservice:PetitionsService) { 
    
  }
  
  ngOnInit(): void{
    
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.nombres = resp;

    });

  }

}
