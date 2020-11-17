import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-usulutan',
  templateUrl: './usulutan.component.html',
  styleUrls: ['./usulutan.component.css']
})
export class UsulutanComponent implements OnInit {

  usulutan = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{

      this.usulutan = resp;

    });

  }

}
