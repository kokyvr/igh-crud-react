
import React, { useRef } from 'react';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

export default function FormProducto({ producto, onSubmit }) {

    let form = useRef();



    const _onSubmit = (values) => {

        onSubmit(values);

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


            <div>
                <Button >Guardar</Button>
            </div>
        </AvForm>
    </div>);




}