import { Component, OnInit, createPlatform, createPlatformFactory } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  public titulo = "Formulario Editorial"
  public editorialForm: FormGroup;


  constructor(protected fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.editorialForm = this.fb.group({
      code:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      country:["",[Validators.required]]

    });

  }

  //metodo para salvar formulario

  saveForm() {
    
  }

}
