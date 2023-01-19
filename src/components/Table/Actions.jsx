import { useState } from 'react';
import { Button } from 'reactstrap';
import { Icons } from '../Icons';


/* Un componente React que genera botones de acción a partir de un listado de objetos JSON. */
export const Actions = ({ handleEdit, actions }) => {
    const [actionsList, setActionsList] = useState(actions);

    return (
        <>
            <td className="d-flex justify-content-evenly">
                {
                    /* Un operador ternario que valida si existe información en la lista de acciones y acorde a ello, mapea una serie de atributos con un componente botón*/
                    actionsList && actionsList.map((action, index) => (
                        <Button key={index}
                            id={action.id.toString()}
                            color={action.color}
                            onClick={action.name == "editar" ? ((e) => handleEdit(e)) : (() => { })}
                        >
                            <Icons icon={action.icon} />
                        </Button>
                    ))
                }
            </td>
        </>
    )
}
