import { NavbarComponent } from "../components/Navbar/NavbarComponent"

/* Una función que devuelve un NavbarComponent para el Header del layout*/
export const Header = ({ navBrand, navItems, navTitle }) => {
    return (
        <NavbarComponent brand={navBrand} items={navItems} title={navTitle} />
    )
}
