import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';

function Localities() {

    const [listLocalities, setListLocalities] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/localities')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListLocalities(respuestaJSON);
            })
    }, []);

    const localitiesRows = listLocalities.map((locality) => {
        return (
            <tr className="tr-row" key={locality.id}>
                <td>{locality.id}</td>
                <td>{locality.city}</td>
                <td>{locality.departament}</td>
                <td>{locality.country}</td>
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
            <legend>Localidades</legend>
            <div className="buttons">
                <button className="btn-new">Nuevo</button>
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
        </main>
    );
}

export default Localities;