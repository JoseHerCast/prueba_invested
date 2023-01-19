import { Table } from "reactstrap";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";


/**
 * Toma una matriz de datos, una matriz de columnas y una matriz de acciones, y devuelve una tabla con
 * un encabezado y un cuerpo.
 */
export const TableComponent = ({ handleEdit, rows, columns, actions }) => {

    return (
        <>
            <Table
                hover
                responsive
            >
                <TableHeader
                    columns={columns}
                />
                <TableBody
                    handleEdit={handleEdit}
                    rows={rows}
                    columns={columns}
                    actions={actions}
                />
            </Table>
        </>
    )
}
