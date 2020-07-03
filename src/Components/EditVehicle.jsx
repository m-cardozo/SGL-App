import React from 'react';
import './components.css';

function EditVehicle(props) {
    const [vehicle, setVehicle] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/vehicles/' + props.id)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setVehicle(respuestaJSON);
            })
    }, [props.id]);

    const sendForm = function (event) {
        event.preventDefault();
        fetch('http://localhost:4000/vehicles/' + props.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(vehicle)
        });
    };

    const handleChange = function (event) {
        setVehicle({ ...vehicle, [event.target.name]: event.target.value });
    }

    return (
        <form className="vehicle" onSubmit={sendForm}>
            <legend>Editar vehiculo</legend>
            <div className="form-block">
                <label htmlFor="registration">Matricula</label>
                <input type="text" name="registration" defaultValue={vehicle.registration} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="mark">Marca</label>
                <input type="text" name="mark" defaultValue={vehicle.mark} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="model">Modelo</label>
                <input type="text" name="model" defaultValue={vehicle.model} onChange={handleChange} />
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

export default EditVehicle;