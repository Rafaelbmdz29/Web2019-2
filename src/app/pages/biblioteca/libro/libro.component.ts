import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  public titulo = "Formulario Libro"
  public IdLibro: string;
  public NombreLibro: string;
  public descrippcion: string;

  constructor() { }

  ngOnInit() {
  }

  //metodo para salvar formulario

  saveForm() {
    alert(this.NombreLibro)

  }

}
