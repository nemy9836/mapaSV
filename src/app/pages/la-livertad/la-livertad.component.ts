import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-la-livertad',
  templateUrl: './la-livertad.component.html',
  styleUrls: ['./la-livertad.component.css']
})
export class LaLivertadComponent implements OnInit {

  lalibertad = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void {

    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{

      this.lalibertad = resp;

    });

  }

}
