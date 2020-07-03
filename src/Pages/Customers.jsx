import React from 'react';
import Edit from '../Icons/edit.svg';
import Delete from '../Icons/delete.svg';

function Customers() {

    const [listCustomers, setListCustomers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/customers')
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((respuestaJSON) => {
                setListCustomers(respuestaJSON);
            })
    }, []);

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
            <legend>Clientes</legend>
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
                    {customersRows}
                </tbody>
            </table>
        </main>
    );
}

export default Customers;