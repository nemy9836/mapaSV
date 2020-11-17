import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-sonsonate',
  templateUrl: './sonsonate.component.html',
  styleUrls: ['./sonsonate.component.css']
})
export class SonsonateComponent implements OnInit {

  sonsonate = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{

      this.sonsonate = resp;

    });

  }

}
