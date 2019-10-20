import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.scss']
})
export class ExistenciasComponent implements OnInit {

  public titulo = "Formulario Existencias"
  public codE: string;
  public seleclibro: string;
  public selecEdito: string;
  public selecAutor: string;
  public Cantidad: string;

  constructor() { }

  ngOnInit() {
  }

  //metodo para salvar formulario

  saveForm() {
    alert(this.codE)

  }

}
