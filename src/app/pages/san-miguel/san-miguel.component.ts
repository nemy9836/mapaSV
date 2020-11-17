import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-san-miguel',
  templateUrl: './san-miguel.component.html',
  styleUrls: ['./san-miguel.component.css']
})
export class SanMiguelComponent implements OnInit {

  sanmiguel = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{

      this.sanmiguel = resp;

    });

  }

}
