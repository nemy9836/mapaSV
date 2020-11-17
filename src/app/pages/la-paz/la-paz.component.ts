import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-la-paz',
  templateUrl: './la-paz.component.html',
  styleUrls: ['./la-paz.component.css']
})
export class LaPazComponent implements OnInit {

  lapaz = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void {

    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.lapaz = resp;

    });

  }

}
