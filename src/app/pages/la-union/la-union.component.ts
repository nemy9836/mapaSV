import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-la-union',
  templateUrl: './la-union.component.html',
  styleUrls: ['./la-union.component.css']
})
export class LaUnionComponent implements OnInit {

  launion = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{

      this.launion = resp;

    });

  }

}
