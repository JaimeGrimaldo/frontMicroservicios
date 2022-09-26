import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrosService } from '../RegistroAlumno/registros.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  constructor(protected registroS:RegistrosService) { }

  nombre!: string;
  matricula!: string;

  Registrar() {
    const registro = {nombre: this.nombre, matricula:this.matricula}
    console.log(registro.nombre, registro.matricula)
    this.registroS.Registro(registro).subscribe(data=> {
      console.log(data)
      alert("Registro chido")
    })
  }

  ngOnInit(): void {
  }

}
