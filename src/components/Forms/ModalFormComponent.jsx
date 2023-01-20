import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import { FormComponent } from "./FormComponent"

/**
 * Es una función que devuelve una forma modal de un formulario.
 * @returns Un componente React.
 */
export const ModalFormComponent = ({ onChange, data, title, fields, toggle, modal, handleSubmit }) => {

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
                    <FormComponent onChange={onChange} data={data} id={"form-data"} fields={fields} handleSubmit={handleSubmit} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit" form="form-data">
                        Guardar
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
