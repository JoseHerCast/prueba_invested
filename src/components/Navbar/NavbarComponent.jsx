import { Navbar, NavbarBrand, NavbarToggler, NavbarText, Nav, NavItem, NavLink } from "reactstrap"
import { Link } from "react-router-dom"


/**
 * La función incluye una marca, artículos y título. Luego devuelve un componente Navbar con la marca,
 * los artículos y el título.
 * @returns Un componente Navbar con NavbarBrand, NavbarToggler, Nav y NavbarText.
 */
export const NavbarComponent = ({ brand, items, title }) => {
    return (
        <>
            <Navbar
                color={"dark"}
                dark
                expand={'md'}
                container={'fluid'}
            >
                <NavbarBrand href="/">{brand}</NavbarBrand>
                <NavbarToggler />
                <Nav className="me-auto" navbar>
                    {
                        /* Un operador ternario. Si los elementos son verdaderos, entonces mapeará los
                        elementos. Si los elementos son falsos, entonces no asignará los elementos. */
                        items && items.map((item, index) => (
                            <NavItem key={index}>
                                <NavLink tag={Link} to={item.ref}>{item.name}</NavLink>
                            </NavItem>
                        ))
                    }
                </Nav>
                <NavbarText>{title}</NavbarText>
            </Navbar>
        </>
    )
}
