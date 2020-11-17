import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  nombres = [];
  occidental = [];

  constructor(private peticionservice:PetitionsService) { 
    
  }

  ngOnInit(): void{
    
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.nombres = resp;

    });

    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{

      this.occidental = resp;

    });

  }

}
