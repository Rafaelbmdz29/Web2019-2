import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public titulo = "Formulario Autores"
  public autorForm: FormGroup;

  constructor(protected fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.autorForm = this.fb.group({
      code:["",[Validators.required]],
      name:"",
      lastname:"",
      bd_year:"",
      death_year:"",
      bd_place:""

    });

  }


//metodo para salvar formulario

saveForm(){

}

}
