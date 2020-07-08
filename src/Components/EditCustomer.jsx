import React from 'react';
import './components.css';

function EditCustomer(props) {
    const [customer, setCustomer] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/customers/' + props.id)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setCustomer(respuestaJSON);
            })
    }, [props.id]);

    const sendForm = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/customers/' + props.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(customer)
        })
            .then(props.saveAfter)
            .then(props.close)
    };

    const handleChange = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    }

    return (
        <form className="customer" onSubmit={sendForm}>
            <legend>Editar cliente</legend>
            <div className="form-block">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" defaultValue={customer.name} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="businessName">Razon Social</label>
                <input type="text" name="businessName" defaultValue={customer.businessName} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="rut">Rut</label>
                <input type="text" name="rut" defaultValue={customer.rut} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="phone">Telefono</label>
                <input type="tel" name="phone" defaultValue={customer.phone} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" defaultValue={customer.email} onChange={handleChange} />
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default EditCustomer;