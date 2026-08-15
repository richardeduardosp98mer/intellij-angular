import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Productos} from '../models/productos';


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl: string = 'http://localhost:8081/productos';

  constructor(private http: HttpClient) { }

  obtenerProdcutos(): Observable<Productos[]>{
    return this.http.get<Productos[]>(this.apiUrl);
  }
}
