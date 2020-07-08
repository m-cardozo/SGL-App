import React from 'react';
import './components.css';

function EditLocality(props) {
    const [locality, setLocality] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/localities/' + props.id)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setLocality(respuestaJSON);
            })
    }, [props.id]);

    const sendForm = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/localities/' + props.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(locality)
        })
            .then(props.saveAfter)
            .then(props.close)
    };

    const handleChange = (event) => {
        setLocality({ ...locality, [event.target.name]: event.target.value });
    }

    return (
        <form className="locality" onSubmit={sendForm}>
            <legend>Editar localidad</legend>
            <div className="form-block">
                <label htmlFor="city">Ciudad</label>
                <input type="text" name="city" defaultValue={locality.city} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="departament">Departamento</label>
                <input type="text" name="departament" defaultValue={locality.departament} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="country">Pais</label>
                <input type="text" name="country" defaultValue={locality.country} onChange={handleChange} />
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default EditLocality;