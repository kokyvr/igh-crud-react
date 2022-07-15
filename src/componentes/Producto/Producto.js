import React, { useEffect, useState } from 'react'

const axios = require('axios').default;

const api = "http://localhost:8080/producto"

const imagenes = "http://localhost:8080/imagenes/"

export default function Producto({productos}){
         const render = productos.map(p=>{
           return <tr key={p.id}>
                <td>{p.nombreProducto}</td>
                <td>{p.stock}</td>
                <td>{p.precio}</td>
                <td>{p.marca}</td>
                <td><img  width={250} src={`${imagenes}` + p.nombreArchivo}/> </td>
                <td>
                    <button>Actualizar</button>
                    <button>Eliminar</button>
                    <button>Actualizar Imagen</button>
                </td>
           </tr>;
        })


    return (<div>
        <table>
          <thead>
            <tr>
            <th>Nombre Producto</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Marca</th>
            <th>Imagen</th>
            <th>Opciones</th>
            </tr>
          </thead>
        <tbody>
            {render}

        </tbody>


        </table>

    </div>);



}