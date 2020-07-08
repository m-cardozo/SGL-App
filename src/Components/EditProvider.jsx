import React from 'react';
import './components.css';

function EditProvider(props) {
    const [provider, setProvider] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/providers/' + props.id)
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setProvider(respuestaJSON);
            })
    }, [props.id]);

    const sendForm = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/providers/' + props.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(provider)
        })
            .then(props.saveAfter)
            .then(props.close)
    };

    const handleChange = (event) => {
        setProvider({ ...provider, [event.target.name]: event.target.value });
    }

    return (
        <form className="provider" onSubmit={sendForm}>
            <legend>Editar proveedor</legend>
            <div className="form-block">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" defaultValue={provider.name} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="businessName">Razon Social</label>
                <input type="text" name="businessName" defaultValue={provider.businessName} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="rut">Rut</label>
                <input type="text" name="rut" defaultValue={provider.rut} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="phone">Telefono</label>
                <input type="tel" name="phone" defaultValue={provider.phone} onChange={handleChange} />
            </div>

            <div className="form-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" defaultValue={provider.email} onChange={handleChange} />
            </div>

            <button className="btn-save" type="submit">Guardar</button>
        </form>
    );
}

export default EditProvider;