import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from "reactstrap"
import { TableComponent } from "./TableComponent"
import { TableHeader } from "./TableHeader"

export const ModalTableComponent = ({ title, toggle, modal, handleAdd, rows, columns }) => {
    return (
        <>
            <Modal
                isOpen={modal}
                toggle={toggle}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <TableComponent actionsCol={false} rows={rows} columns={columns} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleAdd}>
                        Añadir
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
