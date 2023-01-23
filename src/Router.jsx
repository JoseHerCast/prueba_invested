import { createBrowserRouter } from 'react-router-dom';
import { Clients } from './views/Clients';
import { Credits } from './views/Credits';
import { Payments } from './views/Payments';
import { NotFound } from './views/NotFound';
import { LayoutPublic } from './layout/LayoutPublic';

/* Creación de un enrutador para la aplicación. */
export const Router = createBrowserRouter([
    {
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            { path: "/clientes", element: <Clients /> },
            { path: "/creditos", element: <Credits /> },
            { path: "/pagos", element: <Payments /> },
        ]
    }
]);
