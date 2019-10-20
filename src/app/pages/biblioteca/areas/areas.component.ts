import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  public titulo = "Formulario Áreas"
  public codigo : string;
  public nombre : string;
  public descripcion : string;

  constructor() { }

  ngOnInit() {
  }

  //metodo para salvar formulario

  saveForm() {
    alert(this.nombre)

  }

}
