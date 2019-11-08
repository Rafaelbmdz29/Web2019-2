import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public titulo = "Formulario Autores"
  public autorForm: FormGroup;
  public authors: any;

  constructor(protected service: AuthorService, protected fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.service.getAuthors().subscribe(data =>
    this.authors=data
    )
  }

  createForm(){
    this.autorForm = this.fb.group({
      code:["",[Validators.required]],
      name:["",[Validators.required]],
      lastname:["",[Validators.required]],
      bd_year:["",[Validators.required]],
      death_year:["",[Validators.required]],
      bd_place:["",[Validators.required]]

    });

  }


//metodo para salvar formulario

saveForm(){
  this.service.postAuthors(this.autorForm.value).subscribe(data=> alert('listo'));

}

}
