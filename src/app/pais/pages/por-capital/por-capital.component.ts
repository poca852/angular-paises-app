import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = '';
  hayError:boolean = false;
  paises:Pais[] = [];

  constructor(private PaisService:PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino

    this.PaisService.buscarCapital(termino)
      .subscribe(paises => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true
        this.paises = []
      })

  }

}
