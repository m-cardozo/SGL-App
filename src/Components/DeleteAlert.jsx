import React from 'react';
import './components.css';

function DeleteAlert(props) {

    const sendForm = (event) => {
        event.preventDefault();
        fetch(('http://localhost:4000/' + props.entity + '/' + props.id), {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
    }

    return (
        <form className="alert" onSubmit={sendForm}>
            <div>Seguro que desea eliminar?</div>
            <button className="btn-save" type="submit">Aceptar</button>
        </form>
    );
}

export default DeleteAlert;