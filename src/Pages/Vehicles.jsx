import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';
import Close from '../Icons/close.svg';
import NewVehicle from '../Components/NewVehicle';
import EditVehicle from '../Components/EditVehicle';
import DeleteAlert from '../Components/DeleteAlert';
import Modal from 'react-modal';

function Vehicles() {

    const [listVehicles, setListVehicles] = React.useState([]);
    const [isOpenNew, setIsOpenNew] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [vehicleId, setVehicleId] = React.useState();

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
        setVehicleId(id);
    }
    const closeModalEdit = () => {
        setIsOpenEdit(false);
    }

    const openModalDelete = (id) => {
        setIsOpenDelete(true);
        setVehicleId(id);
    }
    const closeModalDelete = () => {
        setIsOpenDelete(false);
    }

    React.useEffect(() => {
        fetch('http://localhost:4000/vehicles')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListVehicles(respuestaJSON);
            })
    }, []);

    const vehiclesRows = listVehicles.map((vehicle) => {
        return (
            <tr className="tr-row" key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.registration}</td>
                <td>{vehicle.mark}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.enabled}</td>
                <td>
                    <button className="btn-edit" onClick={() => openModalEdit(vehicle.id)}>
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete" onClick={() => openModalDelete(vehicle.id)}>
                        <img src={Delete} alt="Eliminar" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <main>
            <legend>Vehiculos</legend>
            <div className="buttons">
                <button className="btn-new" onClick={openModalNew}>Nuevo</button>
            </div>
            <table>
                <thead>
                    <tr className="tr-head">
                        <th>Id</th>
                        <th>Matricula</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Tipo</th>
                        <th>Habilitado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {vehiclesRows}
                </tbody>
            </table>

            <Modal isOpen={isOpenNew} ariaHideApp={false} onRequestClose={closeModalNew} style={customStyles}>
                <button className="btn-close" onClick={closeModalNew}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <NewVehicle />
            </Modal>

            <Modal isOpen={isOpenEdit} ariaHideApp={false} onRequestClose={closeModalEdit} style={customStyles}>
                <button className="btn-close" onClick={closeModalEdit}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <EditVehicle id={vehicleId} />
            </Modal>

            <Modal isOpen={isOpenDelete} ariaHideApp={false} onRequestClose={closeModalDelete} style={customStyles}>
                <button className="btn-close" onClick={closeModalDelete}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <DeleteAlert id={vehicleId} entity="vehicles" />
            </Modal>
        </main>
    );
}

export default Vehicles;