import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {
  public titulo = "Formulario Tipo Libro "
public tipoForm: FormGroup; //paso 1 "tipoForm hace referencia al nombre del formulario"

//paso 2 inyeccion de dependecias
  constructor(protected fb:FormBuilder) {

   } 
  ngOnInit() {
  }
      //paso 3 crear metodo
  createForm(){

    this.tipoForm = this.fb.group({

      idTipo: ' ' ,
      tipoLibro: ' ',
      descripcion: ' '

    });

  }

}
