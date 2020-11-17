import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-santa-ana',
  templateUrl: './santa-ana.component.html',
  styleUrls: ['./santa-ana.component.css']
})
export class SantaAnaComponent implements OnInit {

  santaAna = [];

  constructor(private peticionservice:PetitionsService) { }

  ngOnInit(): void{
    
    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{

      this.santaAna = resp;

    });

  }

}
