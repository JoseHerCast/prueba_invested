import { useState } from 'react';
import { Col, Container, Row, Button, Input } from 'reactstrap';
import { TableComponent } from '.././components/Table/TableComponent';
import { ModalFormComponent } from '.././components/Forms/ModalFormComponent';

//Datos de prueba, la llave primaria siempre se llama 'id'
import { clients } from '.././data/tables';
import { clientForm } from '.././data/forms';
import { clientActions } from ".././data/actions";


const clientCols = Object.keys(clients[0]);//Columnas con base en propiedades de objeto


/* El código anterior es un componente de React que se usa para mostrar una tabla de clientes. */
export const Clients = () => {

    //Inicializamos el id acorde al número de registros
    const [id, setId] = useState(clients.length);

    //Inicializamos los registros de clientes
    const [clientsTabData, setClientsTabData] = useState(clients);

    //Inicializamos la bandera de la modal de clientes, para ocultarla
    const [clientModalAdd, setClientModalAdd] = useState(false);
    //La función clientAddToggle muestra/oculta nuestra modal de añadir registro
    const clientAddToggle = () => setClientModalAdd(!clientModalAdd);

    //Hook para el manejo de la edición de datos utilizando una modal
    const [clientModalEdit, setClientModalEdit] = useState(false);
    //La función clientEditToggle muestra/oculta nuestra modal de edición de registro
    const clientEditToggle = () => setClientModalEdit(!clientModalEdit);
    //Inicializar datos de la modal
    const [clientModalData, setClientModalData] = useState({
        nombre: '',
        email: ''
    })

    /* Función para el manejo de agregar un cliente */
    const handleAddClient = (e) => {
        e.preventDefault();
        const newClientData = { id: id + 1, nombre: e.target.nombre.value, correo: e.target.email.value };
        setClientsTabData([...clientsTabData, newClientData]);
        setId(id + 1);
        clientAddToggle();
    }

    const handleEditClient = (e) => {

        console.log(e)
        const item = clientsTabData.find((client) => client.id === id);
        console.log("EDIT ITEM: ".item)
        setClientModalData({
            nombre: item.nombre,
            email: item.correo
        })
        clientEditToggle();
    };

    const handleDelete = (id) => {
        const newData = data.filter((i) => i.id !== id);
        setClientsTabData(newData);
    };

    /* FILTRO (Hook, manejador y datos)*/
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    //Estamos filtrando por nombre
    const filteredClientsData = clientsTabData.filter((item) =>
        item.nombre.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <Container className='my-3'>
                <Row className='my-5 d-flex justify-content-between'>
                    <Col xs="1" sm="2" md="6" className='d-flex justify-content-center'>
                        <Input type="text" placeholder="Filtrar" onChange={handleFilterChange} />
                    </Col>
                    <Col xs="1" sm="2" md="4" className='d-flex justify-content-center'>
                        <Button color="primary" onClick={clientAddToggle}>
                            Agregar cliente
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TableComponent handleEdit={clientEditToggle} rows={filteredClientsData} columns={clientCols} actions={clientActions} />
                    </Col>
                </Row>
            </Container>
            {/* Modal para agregar cliente */}
            <ModalFormComponent
                title={"Agregar cliente nuevo"}
                fields={clientForm}
                toggle={clientAddToggle}
                modal={clientModalAdd}
                handleSubmit={handleAddClient}
            />
            {/* Modal para editar cliente */}
            <ModalFormComponent
                data={clientModalData}
                title={"Editar cliente"}
                fields={clientForm}
                toggle={clientEditToggle}
                modal={clientModalEdit}
                handleSubmit={handleEditClient}
            />
        </>
    )
}
