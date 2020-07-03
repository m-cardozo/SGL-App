import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';
import Close from '../Icons/close.svg';
import NewUser from '../Components/NewUser';
import EditUser from '../Components/EditUser';
import DeleteAlert from '../Components/DeleteAlert';
import Modal from 'react-modal';

function Users() {

    const [listUsers, setListUsers] = React.useState([]);
    const [isOpenNew, setIsOpenNew] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [userId, setUserId] = React.useState();

    const customStyles = {
        overlay: {
            top: 50,
            left: 200,
            background: '#90909090'
        },
        content: {
            width: 'max-content',
            padding: '5px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '10px',
            transform: 'translate(-50%, -50%)'
        }
    };

    const customStylesAlert = {
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
        setUserId(id);
    }
    const closeModalEdit = () => {
        setIsOpenEdit(false);
    }

    const openModalDelete = (id) => {
        setIsOpenDelete(true);
        setUserId(id);
    }
    const closeModalDelete = () => {
        setIsOpenDelete(false);
    }

    React.useEffect(() => {
        fetch('http://localhost:4000/users')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListUsers(respuestaJSON);
            })
    }, []);

    const usersRows = listUsers.map((user) => {
        return (
            <tr className="tr-row" key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.document}</td>
                <td>{user.phone}</td>
                <td>{user.position}</td>
                <td>{user.paymentPeriod}</td>
                <td>{user.admissionDate}</td>
                <td>{user.egressDate}</td>
                <td>
                    <button className="btn-edit" onClick={() => openModalEdit(user.id)}>
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete" onClick={() => openModalDelete(user.id)}>
                        <img src={Delete} alt="Eliminar" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <main>

            <legend>Usuarios</legend>
            <div className="buttons">
                <button className="btn-new" onClick={openModalNew}>Nuevo</button>
            </div>
            <table>
                <thead>
                    <tr className="tr-head">
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Documento</th>
                        <th>Telefono</th>
                        <th>Cargo</th>
                        <th>Pago</th>
                        <th>Ingreso</th>
                        <th>Egreso</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usersRows}
                </tbody>
            </table>

            <Modal isOpen={isOpenNew} ariaHideApp={false} onRequestClose={closeModalNew} style={customStyles}>
                <button className="btn-close" onClick={closeModalNew}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <NewUser />
            </Modal>

            <Modal isOpen={isOpenEdit} ariaHideApp={false} onRequestClose={closeModalEdit} style={customStyles}>
                <button className="btn-close" onClick={closeModalEdit}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <EditUser id={userId} />
            </Modal>

            <Modal isOpen={isOpenDelete} ariaHideApp={false} onRequestClose={closeModalDelete} style={customStylesAlert}>
                <button className="btn-close" onClick={closeModalDelete}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <DeleteAlert id={userId} entity="users" />
            </Modal>
        </main>
    );
}

export default Users;