import { useState } from 'react';
import { Col, Container, Row, Button, Input } from 'reactstrap';
import { TableComponent } from '.././components/Table/TableComponent';

//Datos de prueba, la llave primaria siempre se llama 'id'
import { clients, credits, payments } from '.././data/tables';

//Union de pagos respecto al crédito al que pertenecen
const paymentJoinCredits = payments.map(payment => ({ ...payment, cliente_id: credits.filter(credit => credit.id === payment.credito_id)[0].cliente_id }))

//Union de pagos respecto al cliente al que pertenecen, utilizando el join anterior
const paymentJoinClients = paymentJoinCredits.map(payment => ({ ...payment, clientName: clients.filter(client => client.id === payment.cliente_id)[0].nombre }))

const paymentCols = Object.keys(paymentJoinClients[0]);//Columnas con base en propiedades de objeto

/**
 * Es una función que devuelve un componente que representa una tabla de pagos con una entrada de filtro y un
 * botón para agregar una nueva fila a la tabla.
 */
export const Payments = () => {

    //Inicializamos los registros de pagos
    const [paymentsTabData, setPaymentsTabData] = useState(paymentJoinClients);

    /* FILTRO (Hook, manejador y datos)*/
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    //Estamos filtrando por nombre del cliente asociado al pago realizado
    const filteredPaymentsData = paymentsTabData.filter((item) =>
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
                        <TableComponent actionsCol={false} rows={filteredPaymentsData} columns={paymentCols} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
