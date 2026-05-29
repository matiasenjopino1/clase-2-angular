import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})


export class Registro {

  erroresNombre: string[] = [
    'El nombre es obligatorio',
    'El nombre debe tener minimo 3 caracteres'
  ]

  erroresEmail: string[] = [
    'El email es obligatorio',
    'Debe ingresar un email valido'
  ]
  formulario!: FormGroup
  enviado: boolean = false
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['']
    })
  }


  enviar(){
    if(this.formulario.valid){
      this.enviado = true
      console.log(this.formulario.value)
      this.formulario.reset()
    }
  }
}
