import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-chalatenango',
  templateUrl: './chalatenango.component.html',
  styleUrls: ['./chalatenango.component.css']
})
export class ChalatenangoComponent implements OnInit {

  chalateNango = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.chalateNango = resp;

    });

  }

}
