import React from 'react';
import './components.css';

function EditUser(props) {
    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/users/' + props.id)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setUser(respuestaJSON);
            })
    }, [props.id]);

    const sendForm = function (event) {
        event.preventDefault();
        fetch('http://localhost:4000/users/' + props.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(user)
        });
    };

    const handleChange = function (event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    return (
        <form className="user" onSubmit={sendForm}>
            <legend>Editar usuario</legend>
            <div className="personal-data">
                <div className="form-block">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" defaultValue={user.name} onChange={handleChange} />
                </div>

                <div className="form-block">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" defaultValue={user.lastName} onChange={handleChange} />
                </div>

                <div className="form-block">
                    <label htmlFor="document">Documento</label>
                    <input type="text" name="document" defaultValue={user.document} onChange={handleChange} />
                </div>

                <div className="form-block">
                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" name="phone" defaultValue={user.phone} onChange={handleChange} />
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
                    <input type="date" name="admissionDate" defaultValue={user.admissionDate} onChange={handleChange} />
                </div>

                <div className="form-block">
                    <label htmlFor="egressDate">Egreso</label>
                    <input type="date" name="egressDate" defaultValue={user.egressDate} onChange={handleChange} />
                </div>
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default EditUser;