import React from 'react';
import './components.css';
import Close from '../Icons/close.svg';
import Modal from 'react-modal';

function DeleteAlert(props) {

    const customStyles = {
        overlay: {
            top: 50,
            left: 200,
            background: '#90909090'
        },
        content: {
            width: '300px',
            padding: '5px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '10px',
            transform: 'translate(-50%, -50%)'
        }
    };

    const sendForm = (event) => {
        event.preventDefault();
        fetch(('http://localhost:4000/' + props.entity + '/' + props.id), {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
            .then(props.saveAfter)
            .then(props.close)
    }

    return (
        <Modal isOpen={props.open} ariaHideApp={false} style={customStyles}>
            <button className="btn-close" onClick={props.close}>
                <img src={Close} alt="Cerrar" />
            </button>
            <form className="alert" onSubmit={sendForm}>
                <div>Seguro que desea eliminar?</div>
                <button className="btn-save" type="submit">Aceptar</button>
            </form>
        </Modal>
    );
}

export default DeleteAlert;