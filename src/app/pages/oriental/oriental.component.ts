import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-oriental',
  templateUrl: './oriental.component.html',
  styleUrls: ['./oriental.component.css']
})
export class OrientalComponent implements OnInit {

  departamentos = [];

  constructor(private peticionservice:PetitionsService) { 
    
  }
  
  ngOnInit(): void{
    
    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{

      this.departamentos = resp;

    });

  }

}
