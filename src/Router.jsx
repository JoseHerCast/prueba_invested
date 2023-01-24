import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import { Clients } from './views/Clients';
import { Credits } from './views/Credits';
import { Payments } from './views/Payments';
import { NotFound } from './views/NotFound';

/* Creación de un enrutador para la aplicación. */
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Clients />} />
                <Route path='/clientes' element={<Clients />} />
                <Route path='/creditos' element={<Credits />} />
                <Route path='/pagos' element={<Payments />} />
            </Routes>
        </>
    );
};
