import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'

})
export class BodyComponent {
  mostrar:boolean = false;
  frase:any={
    mensaje:"Tendrolapiense tendrolapio asf",
    autor:"Tendrolapio Stevens"
  }

  personajes:string[]= ["Spiderman","Venom","Dr Octoupus","Double D"];


}
