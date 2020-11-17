import { WriteKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../../services/petitions.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dataJson = [];
  dataOccidental = [];
  dataOriental = [];

  constructor(private peticionservice:PetitionsService) {  }

  ngOnInit(): void {

    setTimeout(function(){ windownsClose() }, 8000);
    
    function windownsClose(){
      document.getElementById('windowsClose').style.display = 'none';
    }

    //Guarda todos los datos del json en la variable data como un objeto
    this.peticionservice.getCentral()
    .subscribe( (resp: any) =>{
  
      //this.nombres = resp.sansalvador.nombre;

      this.dataJson = resp;

    });

    this.peticionservice.getOccidental()
    .subscribe( (resp: any) =>{
  
      //this.nombres = resp.sansalvador.nombre;

      this.dataOccidental = resp;

    });

    this.peticionservice.getOriental()
    .subscribe( (resp: any) =>{
  
      //this.nombres = resp.sansalvador.nombre;

      this.dataOriental = resp;

    });

    

  }

}
