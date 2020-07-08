import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';
import Close from '../Icons/close.svg';
import NewCustomer from '../Components/NewCustomer';
import EditCustomer from '../Components/EditCustomer';
import DeleteAlert from '../Components/DeleteAlert';
import Modal from 'react-modal';

function Customers() {

    const [listCustomers, setListCustomers] = React.useState([]);
    const [isOpenNew, setIsOpenNew] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [customerId, setCustomerId] = React.useState();

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
        setCustomerId(id);
    }
    const closeModalEdit = () => {
        setIsOpenEdit(false);
    }

    const openModalDelete = (id) => {
        setIsOpenDelete(true);
        setCustomerId(id);
    }
    const closeModalDelete = () => {
        setIsOpenDelete(false);
    }

    const getCustomers = () => {
        fetch('http://localhost:4000/customers')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListCustomers(respuestaJSON);
            })
    }

    React.useEffect(() => { getCustomers() }, []);

    const customersRows = listCustomers.map((customer) => {
        return (
            <tr className="tr-row" key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.businessName}</td>
                <td>{customer.rut}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                    <button className="btn-edit" onClick={() => openModalEdit(customer.id)}>
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete" onClick={() => openModalDelete(customer.id)}>
                        <img src={Delete} alt="Eliminar" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <main>
            <legend>Clientes</legend>
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
                    {customersRows}
                </tbody>
            </table>

            <Modal isOpen={isOpenNew} ariaHideApp={false} onRequestClose={closeModalNew} style={customStyles}>
                <button className="btn-close" onClick={closeModalNew}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <NewCustomer saveAfter={getCustomers} close={closeModalNew} />
            </Modal>

            <Modal isOpen={isOpenEdit} ariaHideApp={false} onRequestClose={closeModalEdit} style={customStyles}>
                <button className="btn-close" onClick={closeModalEdit}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <EditCustomer id={customerId} saveAfter={getCustomers} close={closeModalEdit} />
            </Modal>

            <DeleteAlert id={customerId} entity="customers" open={isOpenDelete} saveAfter={getCustomers} close={closeModalDelete} />
        </main>
    );
}

export default Customers;