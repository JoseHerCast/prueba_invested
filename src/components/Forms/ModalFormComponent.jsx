import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import { FormComponent } from "./FormComponent"

/**
 * Es una función que devuelve una forma modal de un formulario.
 * @returns Un componente React.
 */
export const ModalFormComponent = ({ data = { nombre: '', email: '' }, title, fields, toggle, modal, handleSubmit }) => {

    return (
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
                backdrop="static"
                keyboard={false}
            >
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <FormComponent data={data} id={"form-data"} fields={fields} handleSubmit={handleSubmit} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" form="form-data">
                        Agregar
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
