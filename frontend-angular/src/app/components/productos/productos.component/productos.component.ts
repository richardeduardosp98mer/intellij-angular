import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductoService} from '../../../services/producto.service';
import {Productos} from '../../../models/productos';

@Component({
  selector: 'app-productos.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
//sombrear el nombre de la clse, hacer Alt + Enter
export class ProductosComponent implements OnInit {
  productos: Productos[] = [];
  cargando = true;
  constructor(private productoService:ProductoService){ }
  ngOnInit(): void {
    console.log("Iniciando tabla de productos ...");
    this.productoService.obtenerProdcutos().subscribe({
      next: (data:Productos[]) =>{
        console.log("Datos recibidos de la API: ", data);
        this.productos = data;
        this.cargando = false;
      },
      error: (err) =>{
        console.error("Error al obtener productos: ", err);
      },
      complete:() =>{
        console.log("Carga de productos completados")
      }
    });
  }
}
