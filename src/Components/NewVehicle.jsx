import React from 'react';
import './components.css';

function NewVehicle() {
    const [vehicle, setVehicle] = React.useState({
        registration: '',
        mark: '',
        model: '',
        type: '',
        enabled: ''
    });

    const sendForm = function (event) {
        event.preventDefault();
        if (!vehicle.type || !vehicle.enabled) {
            console.error("Debe completar todos los datos");
        } else {
            fetch('http://localhost:4000/vehicles', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(vehicle)
            });
        }
    };

    const handleChange = function (event) {
        setVehicle({ ...vehicle, [event.target.name]: event.target.value });
    }

    return (
        <form className="vehicle" onSubmit={sendForm}>
            <legend>Nuevo vehiculo</legend>
            <div className="form-block">
                <label htmlFor="registration">Matricula</label>
                <input type="text" name="registration" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="mark">Marca</label>
                <input type="text" name="mark" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="model">Modelo</label>
                <input type="text" name="model" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="type">Tipo</label>
                <select name="type" defaultValue="DEFAULT" onChange={handleChange}>
                    <option value="DEFAULT" disabled>Seleccionar</option>
                    <option>Moto</option>
                    <option>Auto</option>
                    <option>Camioneta</option>
                    <option>Camion</option>
                    <option>Tracto Camion</option>
                </select>
            </div>

            <div className="form-block">
                <label htmlFor="enabled">Habilitado</label>
                <select name="enabled" defaultValue="DEFAULT" onChange={handleChange}>
                    <option value="DEFAULT" disabled>Seleccionar</option>
                    <option>SI</option>
                    <option>NO</option>
                </select>
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default NewVehicle;