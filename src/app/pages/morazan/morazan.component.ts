import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-morazan',
  templateUrl: './morazan.component.html',
  styleUrls: ['./morazan.component.css']
})
export class MorazanComponent implements OnInit {

  morazan = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{

      this.morazan = resp;

    });

  }

}
