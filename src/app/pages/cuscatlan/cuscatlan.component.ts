import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-cuscatlan',
  templateUrl: './cuscatlan.component.html',
  styleUrls: ['./cuscatlan.component.css']
})
export class CuscatlanComponent implements OnInit {

  cuscatlan = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.cuscatlan = resp;

    });

  }

}
