import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';

/* Creación de un enrutador para la aplicación. */
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/prueba_invested' element={<Home />} />
            </Routes>
        </>
    );
};
