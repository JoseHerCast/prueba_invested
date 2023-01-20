import { Table } from "reactstrap";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";


/**
 * Toma una matriz de datos, una matriz de columnas y una matriz de acciones, y devuelve una tabla con
 * un encabezado y un cuerpo.
 */
export const TableComponent = ({ actionsCol = true, handleHistory, handleDelete, handleEdit, rows, columns, actions }) => {

    return (
        <>
            <Table
                hover
                responsive
            >
                <TableHeader
                    columns={columns}
                    actionsCol={actionsCol}
                />
                <TableBody
                    actionsCol={actionsCol}
                    handleHistory={handleHistory}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    rows={rows}
                    columns={columns}
                    actions={actions}
                />
            </Table>
        </>
    )
}
