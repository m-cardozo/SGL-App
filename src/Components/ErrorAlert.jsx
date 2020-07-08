import React from 'react';
import './components.css';
import Close from '../Icons/close.svg';
import Modal from 'react-modal';

function ErrorAlert(props) {

    const customStyles = {
        overlay: {
            top: 50,
            left: 200,
            background: '#90909050'
        },
        content: {
            width: '300px',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            top: '50px',
            left: 'auto',
            right: '-135px',
            bottom: 'auto',
            borderRadius: '10px',
            transform: 'translate(-50%, -50%)',
            background: '#d52025da'
        }
    };

    return (
        <Modal isOpen={props.open} ariaHideApp={false} onRequestClose={props.close} style={customStyles}>
            <div className="alertError" >Debe ingresar todos los datos</div>
            <button className="btn-close" onClick={props.close}>
                <img src={Close} alt="Cerrar" />
            </button>
        </Modal>
    );
}

export default ErrorAlert;