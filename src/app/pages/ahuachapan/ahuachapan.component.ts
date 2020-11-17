import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-ahuachapan',
  templateUrl: './ahuachapan.component.html',
  styleUrls: ['./ahuachapan.component.css']
})
export class AhuachapanComponent implements OnInit {

  ahuachapan = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{

      this.ahuachapan = resp;

    });

  }

}
