import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { Clients } from './Clients'
import { Credits } from './Credits'
import { Payments } from './Payments'

export const Home = () => {
    const [activeTab, setActiveTab] = useState('1');

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <Nav tabs className="my-3 mx-5">
                <NavItem>
                    <NavLink style={{ cursor: isHovering ? 'pointer' : 'none' }}
                        className={activeTab === '1' ? 'active' : ''}
                        onClick={() => { toggle('1'); }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Clientes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: isHovering ? 'pointer' : 'none' }}
                        className={activeTab === '2' ? 'active' : ''}
                        onClick={() => { toggle('2'); }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Creditos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: isHovering ? 'pointer' : 'none' }}
                        className={activeTab === '3' ? 'active' : ''}
                        onClick={() => { toggle('3'); }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Pagos
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent className="my-3 mx-5" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Clients />
                </TabPane>
                <TabPane tabId="2">
                    <Credits />
                </TabPane>
                <TabPane tabId="3">
                    <Payments />
                </TabPane>
            </TabContent>
        </>
    )
}
