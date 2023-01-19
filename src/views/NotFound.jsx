import { useRouteError } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardTitle, CardText, Container } from 'reactstrap';

/**
 * Es un componente de React que representa una tarjeta Bootstrap con el estado de error, el texto de
 * estado y los datos.
 * @returns {
 *     "estado": 404,
 *     "statusText": "No encontrado",
 *     "Datos no encontrados"
 * }
 */
export const NotFound = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <Card
                    className="my-5"
                    color="light"
                    style={{
                        width: '42rem',
                        height: "18rem"
                    }}
                >
                    <CardHeader tag="h1">
                        <b>{error.status}</b>
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h3">
                            {error.statusText}
                        </CardTitle>
                        <CardText>
                            <br />
                            {error.data}
                            <br />
                            <br />
                            <a href="/">Ir al inicio</a>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
