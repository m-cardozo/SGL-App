import React from 'react';
import './components.css';

function NewCustomer() {
    const [customer, setCustomer] = React.useState({
        name: '',
        buinessName: '',
        rut: '',
        phone: '',
        email: ''
    });

    const sendForm = function (event) {
        event.preventDefault();
        fetch('http://localhost:4000/customers', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(customer)
        });
    };

    const handleChange = function (event) {
        setCustomer({ ...customer, [event.target.name]: event.target.value });
    }

    return (
        <form className="customer" onSubmit={sendForm}>
            <legend>Nuevo cliente</legend>
            <div className="form-block">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="businessName">Razon Social</label>
                <input type="text" name="businessName" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="rut">Rut</label>
                <input type="text" name="rut" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="phone">Telefono</label>
                <input type="tel" name="phone" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={handleChange} required />
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default NewCustomer;