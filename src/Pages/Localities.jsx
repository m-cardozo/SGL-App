import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';
import Close from '../Icons/close.svg';
import NewLocality from '../Components/NewLocality';
import EditLocality from '../Components/EditLocality';
import DeleteAlert from '../Components/DeleteAlert';
import Modal from 'react-modal';

function Localities() {

    const [listLocalities, setListLocalities] = React.useState([]);
    const [isOpenNew, setIsOpenNew] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [localityId, setLocalityId] = React.useState();

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
        setLocalityId(id);
    }
    const closeModalEdit = () => {
        setIsOpenEdit(false);
    }

    const openModalDelete = (id) => {
        setIsOpenDelete(true);
        setLocalityId(id);
    }
    const closeModalDelete = () => {
        setIsOpenDelete(false);
    }

    const getLocalities = () => {
        fetch('http://localhost:4000/localities')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListLocalities(respuestaJSON);
            })
    }

    React.useEffect(() => { getLocalities() }, []);

    const localitiesRows = listLocalities.map((locality) => {
        return (
            <tr className="tr-row" key={locality.id}>
                <td>{locality.id}</td>
                <td>{locality.city}</td>
                <td>{locality.departament}</td>
                <td>{locality.country}</td>
                <td>
                    <button className="btn-edit" onClick={() => openModalEdit(locality.id)}>
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete" onClick={() => openModalDelete(locality.id)}>
                        <img src={Delete} alt="Eliminar" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <main>
            <legend>Localidades</legend>
            <div className="buttons">
                <button className="btn-new" onClick={openModalNew}>Nuevo</button>
            </div>
            <table>
                <thead>
                    <tr className="tr-head">
                        <th>Id</th>
                        <th>Ciudad</th>
                        <th>Departamento</th>
                        <th>Pais</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {localitiesRows}
                </tbody>
            </table>

            <Modal isOpen={isOpenNew} ariaHideApp={false} onRequestClose={closeModalNew} style={customStyles}>
                <button className="btn-close" onClick={closeModalNew}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <NewLocality saveAfter={getLocalities} close={closeModalNew} />
            </Modal>

            <Modal isOpen={isOpenEdit} ariaHideApp={false} onRequestClose={closeModalEdit} style={customStyles}>
                <button className="btn-close" onClick={closeModalEdit}>
                    <img src={Close} alt="Cerrar" />
                </button>
                <EditLocality id={localityId} saveAfter={getLocalities} close={closeModalEdit} />
            </Modal>

            <DeleteAlert id={localityId} entity="localities" open={isOpenDelete} saveAfter={getLocalities} close={closeModalDelete} />
        </main>
    );
}

export default Localities;