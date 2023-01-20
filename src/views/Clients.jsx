import { useState } from 'react';
import { Col, Container, Row, Button, Input } from 'reactstrap';
import { TableComponent } from '.././components/Table/TableComponent';
import { ModalFormComponent } from '.././components/Forms/ModalFormComponent';
import { ModalTableComponent } from '../components/Table/ModalTableComponent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment'

//Datos de prueba, la llave primaria siempre se llama 'id'
import { clients, credits } from '.././data/tables';
import { clientForm } from '.././data/forms';
import { clientActions } from ".././data/actions";


const creditCols = Object.keys(credits[0]);//Columnas con base en propiedades de objeto
const clientCols = Object.keys(clients[0]);//Columnas con base en propiedades de objeto
const MySwal = withReactContent(Swal)


/* El código anterior es un componente de React que se usa para mostrar una tabla de clientes. */
export const Clients = () => {

    //Inicializamos el id acorde al número de registros
    const [clientId, setClientId] = useState(clients.length);
    const [creditId, setCreditId] = useState(credits.length);

    //Inicializamos los registros de clientes, información de la tabla
    const [clientsTabData, setClientsTabData] = useState(clients);

    //Inicializamos los registros de créditos, información de la tabla
    const [creditsTabData, setCreditsTabData] = useState(credits);

    //Inicializamos la bandera de la modal de clientes, para ocultarla
    const [clientModalAdd, setClientModalAdd] = useState(false);
    //La función clientAddToggle muestra/oculta nuestra modal de añadir registro
    const clientAddToggle = () => {
        setClientModalAdd(!clientModalAdd)
        setClientModalData({ nombre: "", correo: "" })
    };

    //Hook para el manejo de la edición de datos utilizando una modal
    const [clientModalEdit, setClientModalEdit] = useState(false);
    //La función clientEditToggle muestra/oculta nuestra modal de edición de registro
    const clientEditToggle = () => setClientModalEdit(!clientModalEdit);

    //Hook para el manejo de las solicitudes de préstamos utilizando una modal
    const [clientModalHistory, setClientModalHistory] = useState(false);
    //muestra/oculta nuestra modal
    const clientHistoryToggle = () => setClientModalHistory(!clientModalHistory);

    //Inicializar datos de las modales de clientes
    const [clientModalData, setClientModalData] = useState({
        nombre: "",
        corre: ""
    })

    const [creditModalData, setCreditModalData] = useState([])

    /* Función para el manejo de agregar un cliente */
    const handleAddClient = (e) => {
        e.preventDefault();
        const newClientData = { id: clientId + 1, nombre: e.target.nombre.value, correo: e.target.correo.value };
        setClientsTabData([...clientsTabData, newClientData]);
        setClientId(clientId + 1);
        clientAddToggle();
    }

    const handleEditClient = (e) => {
        e.preventDefault();

        // Crear una copia del arreglo de registros
        const newRecords = [...clientsTabData];

        // Buscar el índice del objeto a reemplazar
        const recordIndex = newRecords.findIndex((record) => record.id === clientModalData.id);

        // Eliminar el objeto a reemplazar
        newRecords.splice(recordIndex, 1);
        // Insertar el objeto actualizado en la misma posición
        newRecords.splice(recordIndex, 0, clientModalData);

        // Actualizar el estado con el nuevo arreglo
        setClientsTabData(newRecords);
        MySwal.fire(
            '¡Actualizado!',
            'El registro se ha actualizado con éxito',
            'success'
        )

        clientEditToggle()
    }

    const handleDelete = async (row) => {

        const confirm = await MySwal.fire({
            title: '¿Estás seguro que deseas eliminar el registro?',
            text: "Esta acción no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        });

        if (confirm.value) {
            const newData = clientsTabData.filter((client) => client.id !== row.id);
            setClientsTabData(newData);
            MySwal.fire(
                '¡Eliminado!',
                'El registro se ha eliminado con éxito',
                'success'
            )
        }

    };

    const handleEditClientModal = (row) => {

        setClientModalData({ ...row })
        clientEditToggle();
    };

    const handleHistoryModal = (row) => {
        const clientCredits = [...creditsTabData.filter((credit) => credit.cliente_id == row.id)]
        setCreditModalData(clientCredits)
        clientHistoryToggle();
    }

    const handleAddCredit = (monto, cliente_id) => {
        /* const newCreditData = {
            id: creditId + 1,
            fecha: new Date(),
            monto_original: monto,
            saldo: monto,
            parcialidad: 0,
            liquidado: "false",
            cliente_id: cliente_id
        }; */
        const newCreditData = {
            id: creditId + 1,
            fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            monto_original: 5000,
            saldo: 5000,
            parcialidad: 0,
            liquidado: "false",
            cliente_id: creditsTabData[0].cliente_id
        };
        setCreditModalData([...creditModalData, newCreditData]);
        setCreditId(creditId + 1);
        //clientHistoryToggle();
        console.log("Creditos: ", creditsTabData)
    }

    const onChange = (e) => {
        setClientModalData({ ...clientModalData, [e.target.name]: e.target.value })
    }

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
                        <TableComponent handleHistory={handleHistoryModal} handleDelete={handleDelete} handleEdit={handleEditClientModal} rows={filteredClientsData} columns={clientCols} actions={clientActions} />
                    </Col>
                </Row>
            </Container>
            {/* Modal para agregar cliente */}
            <ModalFormComponent
                title={"Agregar cliente nuevo"}
                onChange={onChange}
                data={clientModalData}
                fields={clientForm}
                toggle={clientAddToggle}
                modal={clientModalAdd}
                handleSubmit={handleAddClient}
            />
            {/* Modal para editar cliente */}
            <ModalFormComponent
                onChange={onChange}
                data={clientModalData}
                title={"Editar cliente"}
                fields={clientForm}
                toggle={clientEditToggle}
                modal={clientModalEdit}
                handleSubmit={handleEditClient}
            />
            {/* Modal para solicitudes de cliente */}
            <ModalTableComponent
                title={"Historial de préstamos"}
                toggle={clientHistoryToggle}
                modal={clientModalHistory}
                handleAdd={handleAddCredit}
                rows={creditModalData}
                columns={creditCols}
            />
        </>
    )
}
