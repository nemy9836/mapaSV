import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-occidental',
  templateUrl: './occidental.component.html',
  styleUrls: ['./occidental.component.css']
})
export class OccidentalComponent implements OnInit {

  departamentos = [];

  constructor(private peticionservice:PetitionsService) { 
    
  }
  
  ngOnInit(): void{
    
    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{

      this.departamentos = resp;

    });

  }

}
