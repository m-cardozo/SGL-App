import React from 'react';
import './components.css';

function NewUser() {
    const [user, setUser] = React.useState({
        name: '',
        lastName: '',
        document: '',
        phone: '',
        position: '',
        paymentPeriod: '',
        admissionDate: '',
        egressDate: ''
    });

    const sendForm = function (event) {
        event.preventDefault();
        if (!user.position || !user.paymentPeriod) {
            console.error("Debe completar todos los datos");
        } else {
            fetch('http://localhost:4000/users', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user)
            });
        }
    };

    const handleChange = function (event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    return (
        <form className="user" onSubmit={sendForm}>
            <legend>Nuevo usuario</legend>
            <div className="personal-data">
                <div className="form-block">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" onChange={handleChange} required />
                </div>

                <div className="form-block">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" onChange={handleChange} required />
                </div>

                <div className="form-block">
                    <label htmlFor="document">Documento</label>
                    <input type="text" name="document" onChange={handleChange} required />
                </div>

                <div className="form-block">
                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" name="phone" onChange={handleChange} required />
                </div>
            </div>

            <div className="labor-data">
                <div className="form-block">
                    <label htmlFor="position">Cargo</label>
                    <select name="position" defaultValue="DEFAULT" onChange={handleChange}>
                        <option value="DEFAULT" disabled>Seleccionar</option>
                        <option>Administrativo</option>
                        <option>Chofer</option>
                        <option>Operario</option>
                        <option>Prevencionista</option>
                        <option>Mecanico</option>
                    </select>
                </div>

                <div className="form-block">
                    <label htmlFor="paymentPeriod">Pago</label>
                    <select name="paymentPeriod" defaultValue="DEFAULT" onChange={handleChange}>
                        <option value="DEFAULT" disabled>Seleccionar</option>
                        <option>Jornal</option>
                        <option>Semanal</option>
                        <option>Quincenal</option>
                        <option>Mensual</option>
                    </select>
                </div>

                <div className="form-block">
                    <label htmlFor="admissionDate">Ingreso</label>
                    <input type="date" name="admissionDate" onChange={handleChange} required />
                </div>

                <div className="form-block">
                    <label htmlFor="egressDate">Egreso</label>
                    <input type="date" name="egressDate" onChange={handleChange} />
                </div>
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default NewUser;