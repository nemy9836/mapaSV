import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Muestra mensaje enviado

    document.getElementById('windowsFunction').style.display = 'none';

    var button = document.getElementById('form_button');

    button.addEventListener('click',function (e){

      document.getElementById('windowsFunction').style.display = 'block';

      e.preventDefault();

      setTimeout( () => {
        windowsOpen()
      }, 4000);

      function windowsOpen() {
        document.getElementById('windowsFunction').style.display = 'none';
      }

    });

    //-------------------------FIN MENSAJE ENVIADO-----------------------------------
    
  }

}
