import { Actions } from './Actions';

/* Una función que devuelve el cuerpo de una tabla. */
export const TableBody = ({ handleEdit, rows, columns, actions }) => {
    return (
        <>
            <tbody>
                {
                    /* Un operador ternario. Si filas es verdadero, entonces mapeará las filas. Si
                    filas es falso, entonces no asignará las filas. */
                    rows && rows.map((item, index) => (
                        <tr key={index}>
                            {
                                /* Mapear las columnas y devolver un elemento td con el valor de la
                                columna. */
                                columns.map((column, index) => (
                                    <td key={index} className="text-center">{item[column]}</td>
                                ))
                            }
                            {/* Columna especial de acciones */}
                            <Actions handleEdit={handleEdit} actions={actions} />
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}
