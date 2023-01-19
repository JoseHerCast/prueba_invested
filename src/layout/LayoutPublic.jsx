import { Outlet } from "react-router-dom"
import { Header } from "./Header"

import { navItems } from "../data/nav-items"

/**
 * LayoutPublic es una función que devuelve un React Fragment que contiene un componente Header y un
 * componente Outlet.
 */
export const LayoutPublic = () => {
    return (
        <>
            <Header navBrand={"Invested"} navItems={navItems} navTitle={"Prueba"} />
            <main>
                <Outlet />
            </main>
        </>
    )
}
