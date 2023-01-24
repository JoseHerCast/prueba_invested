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
                <Route exact path='https://josehercast.github.io/prueba_invested' element={<Clients />} />
                <Route exact path='https://josehercast.github.io/prueba_invested/clientes' element={<Clients />} />
                <Route exact path='https://josehercast.github.io/prueba_invested/creditos' element={<Credits />} />
                <Route exact path='https://josehercast.github.io/prueba_invested/pagos' element={<Payments />} />
            </Routes>
        </>
    );
};
