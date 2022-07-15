
import React, { useRef, useState } from 'react';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

export default function FormProducto({ producto, onSubmit }) {

    let form = useRef();

    const [imagen,setImagen] = useState();

    const fileSelectHanlder = e=>{
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.readyState === 2) {
            let fd = new FormData();
          
            let image = e.target.files[0];
            console.log(image);
            fd.append('file',image,image.name);
            setImagen(fd);
            
          }
        };
        fileReader.readAsDataURL(e.target.files[0]);
      }
    

    const _onSubmit = (values) => {
        console.log(imagen);
        onSubmit({values,imagen});

        form.reset();
    }


   
    return (<div>
        <h3 className="mb-3">{producto ? 'Editar' : 'Nuevo'} Producto</h3>
        <AvForm ref={c => (form = c)} onValidSubmit={(_, values) => _onSubmit(values)}>
            <AvGroup>
                <AvField name="nombreProducto" label="Nombre Producto" required value={producto ? producto.nombreProducto : ''} />

            </AvGroup>
            <AvGroup>
                <AvField name="stock" label="Stock Producto" required value={producto ? producto.stock : ''} />

            </AvGroup>

            <AvGroup>
            <AvField name="precio" label="Precio Producto" required value={producto ? producto.precio : ''} />  

            </AvGroup>

            <AvGroup>
            <AvField name="marca" label="Marca Producto" required value={producto ? producto.marca : ''} />  

            </AvGroup>

            <input name='file' accept='image/*' type='file' 
                onChange={e=>fileSelectHanlder(e)}             
            />


            <div>
                <Button >Guardar</Button>
            </div>
        </AvForm>
    </div>);




}