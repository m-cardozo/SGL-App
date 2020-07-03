import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';
import Close from '../Icons/close.svg';
import NewProvider from '../Components/NewProvider';
import EditProvider from '../Components/EditProvider';
import DeleteAlert from '../Components/DeleteAlert';
import Modal from 'react-modal';

function Providers() {

    const [listProviders, setListProviders] = React.useState([]);
    const [isOpenNew, setIsOpenNew] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [providerId, setProviderId] = React.useState();

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

    const openModalNew = () => {
        setIsOpenNew(true);
    }
    const closeModalNew = () => {
        setIsOpenNew(false);
    }

    const openModalEdit = (id) => {
        setIsOpenEdit(true);
        setProviderId(id);
    }
    const closeModalEdit = () => {
        setIsOpenEdit(false);
    }

    const openModalDelete = (id) => {
        setIsOpenDelete(true);
        setProviderId(id);
    }
    const closeModalDelete = () => {
        setIsOpenDelete(false);
    }

    React.useEffect(() => {
        fetch('http://localhost:4000/providers')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListProviders(respuestaJSON);
            })
    }, []);

    const providersRows = listProviders.map((provider) => {
        return (
            <tr className="tr-row" key={provider.id}>
                <td>{provider.id}</td>
                <td>{provider.name}</td>
                <td>{provider.businessName}</td>
                <td>{provider.rut}</td>
                <td>{provider.phone}</td>
                <td>{provider.email}</td>
                <td>
                    <button className="btn-edit" onClick={() => openModalEdit(provider.id)}>
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete" onClick={() => openModalDelete(provider.id)}>
                        <img src={Delete} alt="Eliminar" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <main>
            <legend>Proveedores</legend>
            <div className="buttons">
                <button className="btn-new" onClick={openModalNew}>Nuevo</button>
            </div>
            <table>
                <thead>
                    <tr className="tr-head">
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Razon Social</th>
                        <th>Rut</th>
                        <th>Telefono</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {providersRows}
                </tbody>
            </table>

            <Modal isOpen={isOpenNew} ariaHideApp={false} onRequestClose={closeModalNew} style={customStyles}>
                <button className="btn-close" onClick={closeModalNew}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <NewProvider />
            </Modal>

            <Modal isOpen={isOpenEdit} ariaHideApp={false} onRequestClose={closeModalEdit} style={customStyles}>
                <button className="btn-close" onClick={closeModalEdit}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <EditProvider id={providerId} />
            </Modal>

            <Modal isOpen={isOpenDelete} ariaHideApp={false} onRequestClose={closeModalDelete} style={customStyles}>
                <button className="btn-close" onClick={closeModalDelete}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <DeleteAlert id={providerId} entity="providers" />
            </Modal>
        </main>
    );
}

export default Providers;