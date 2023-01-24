import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutPublic } from './layout/LayoutPublic';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={Router} /> */}
    <LayoutPublic />
  </React.StrictMode>,
)
