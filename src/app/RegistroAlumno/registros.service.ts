import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(protected http:HttpClient) { }

  Registro(registro:any):Observable<any> {
    return this.http.post('http://localhost:3000/registro',registro)
  }
}
