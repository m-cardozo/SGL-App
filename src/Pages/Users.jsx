import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';

function Users() {

    const [listUsers, setListUsers] = React.useState([]);

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

            <legend>Usuarios</legend>
            <div className="buttons">
                <button className="btn-new">Nuevo</button>
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
        </main>
    );
}

export default Users;