import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public titulo = "Formulario Editorial"
  public codigoE: string;
  public nombre: string;
  public descripcion: string;
  public email: string;
  public telefono: string;

  constructor() { }

  ngOnInit() {
  }

  //metodo para salvar formulario

  saveForm() {
    alert(this.nombre)

  }

}
