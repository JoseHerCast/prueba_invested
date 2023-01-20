import { useState } from 'react';
import { Col, Container, Row, Input } from 'reactstrap';
import { TableComponent } from '.././components/Table/TableComponent';
import { ModalTableComponent } from '../components/Table/ModalTableComponent';

//Datos de prueba, la llave primaria siempre se llama 'id'
import { clients, credits, payments } from '.././data/tables';
import { creditActions } from ".././data/actions";

/* Unión de la tabla de clientes con la tabla de créditos. */
const creditsJoinClients = credits.map(credit => ({ ...credit, clientName: clients.filter(client => client.id === credit.cliente_id)[0].nombre }))


//Union de pagos respecto al crédito al que pertenecen
const paymentJoinCredits = payments.map(payment => ({ ...payment, cliente_id: credits.filter(credit => credit.id === payment.credito_id)[0].cliente_id }))

const paymentCols = Object.keys(paymentJoinCredits[0]);//Columnas con base en propiedades de objeto
const creditCols = Object.keys(creditsJoinClients[0]);//Columnas con base en propiedades de objeto


/**
 * Es un componente de React que representa una tabla de créditos con una entrada de filtro.
 */
export const Credits = () => {

    //Inicializamos los registros de créditos
    const [creditsTabData, setCreditsTabData] = useState(creditsJoinClients);

    //Inicializamos los registros de pagos
    const [paymentsTabData, setPaymentsTabData] = useState(paymentJoinCredits);

    const [paymentModalData, setPaymentModalData] = useState([])

    //Hook para el manejo de los pagos utilizando una modal
    const [creditModalHistory, setCreditModalHistory] = useState(false);
    //La muestra/oculta nuestra modal
    const creditHistoryToggle = () => setCreditModalHistory(!creditModalHistory);

    const handleHistoryModal = (row) => {
        const clientPayments = [...paymentsTabData.filter((payment) => payment.credito_id == row.id)]
        setPaymentModalData(clientPayments)
        creditHistoryToggle();
    }

    const handleAddPayment = () => {
        console.log("Realizar solicitud")
    }

    /* FILTRO (Hook, manejador y datos)*/
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    //Estamos filtrando por nombre del cliente asociado al crédito
    const filteredCreditsData = creditsTabData.filter((item) =>
        item.clientName.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <>
            <Container className='my-3'>
                <Row className='my-5 d-flex justify-content-between'>
                    <Col xs="1" sm="2" md="6" className='d-flex justify-content-center'>
                        <Input type="text" placeholder="Filtrar" onChange={handleFilterChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TableComponent handleHistory={handleHistoryModal} rows={filteredCreditsData} columns={creditCols} actions={creditActions} />
                    </Col>
                </Row>
            </Container>
            {/* Modal para pagos de crédito */}
            <ModalTableComponent
                title={"Historial de pagos"}
                toggle={creditHistoryToggle}
                modal={creditModalHistory}
                handleAdd={handleAddPayment}
                rows={paymentModalData}
                columns={paymentCols}
            />
        </>
    )
}
