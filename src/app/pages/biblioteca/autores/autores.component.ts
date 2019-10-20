import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public titulo = "Formulario Autores"
  public idAutor : string;
  public nombre1 : string;
  public nombre2 : string;
  public apellido1 : string;
  public apellido2 : string;
  public fechanac : Date;
  public nacionalidad : string;
  public telefono : string;
  public correo : string;

  constructor() { }



  ngOnInit() {
  }
//metodo para salvar formulario

saveForm(){
  alert(this.nombre1)

}

}
