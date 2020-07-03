import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';

function Vehicles() {

    const [listVehicles, setListVehicles] = React.useState([]);

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
                    <button className="btn-edit">
                        <img src={Edit} alt="Editar" />
                    </button>
                    <button className="btn-delete">
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
                <button className="btn-new">Nuevo</button>
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
        </main>
    );
}

export default Vehicles;