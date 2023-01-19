
/**
 * Si las columnas son verdaderas, asigne las columnas.
 * @returns Un encabezado de tabla con las columnas pasadas como accesorios.
 */
export const TableHeader = ({ columns }) => {
    return (
        <>
            <thead>
                <tr className="table-dark">
                    {
                        /* Un operador ternario. Si las columnas son verdaderas, asigne las columnas. */
                        columns && columns.map((column, index) => (
                            <th key={index} className="text-center">{column}</th>
                        ))
                    }
                    {/* Columna especial para las acciones */}
                    <th className="text-center">acciones</th>
                </tr>
            </thead>
        </>
    )
}