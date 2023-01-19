import { FaHistory, FaTrash, FaPen } from 'react-icons/fa';

/* Un operador ternario. Lista de iconos dinámica */
export const Icons = ({ icon }) => {
    return (
        <>
            {
                (icon == "FaHistory" && <FaHistory />)
                ||
                (icon == "FaTrash" && <FaTrash />)
                ||
                (icon == "FaPen" && <FaPen />)
            }
        </>
    )
}
