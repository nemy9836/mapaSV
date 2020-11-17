import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-san-vicente',
  templateUrl: './san-vicente.component.html',
  styleUrls: ['./san-vicente.component.css']
})
export class SanVicenteComponent implements OnInit {

  sanVicentedep = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.sanVicentedep = resp;

    });

  }

}
