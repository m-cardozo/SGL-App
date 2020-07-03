import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';

function Providers() {

    const [listProviders, setListProviders] = React.useState([]);

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
            <legend>Proveedores</legend>
            <div className="buttons">
                <button className="btn-new">Nuevo</button>
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
        </main>
    );
}

export default Providers;