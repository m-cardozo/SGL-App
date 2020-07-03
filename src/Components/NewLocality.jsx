import React from 'react';
import './components.css';

function NewLocality() {
    const [locality, setLocality] = React.useState({
        city: '',
        departament: '',
        country: ''
    });

    const sendForm = function (event) {
        event.preventDefault();
        fetch('http://localhost:4000/localities', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(locality)
        });
    };

    const handleChange = function (event) {
        setLocality({ ...locality, [event.target.name]: event.target.value });
    }

    return (
        <form className="locality" onSubmit={sendForm}>
            <legend>Nueva localidad</legend>
            <div className="form-block">
                <label htmlFor="city">Ciudad</label>
                <input type="text" name="city" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="departament">Departamento</label>
                <input type="text" name="departament" onChange={handleChange} required />
            </div>

            <div className="form-block">
                <label htmlFor="country">Pais</label>
                <input type="text" name="country" onChange={handleChange} required />
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default NewLocality;