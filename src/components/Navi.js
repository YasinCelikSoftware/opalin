import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import NavBrand from './NavBrand';
import '../assets/css/Navi.css';
import '../i18n';
import {useTranslation} from 'react-i18next';

function Navi (args) {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => setIsOpen (!isOpen);

  const {t} = useTranslation ();

  return (
    <div className="navi w-100">
      <Navbar {...args} expand="xl" className="px-5">
        <NavbarBrand href="/">
          <NavBrand />
          {' '}Opalin
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-between">
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">{t ('home')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                {t ('pricing')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                {t ('about')}
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <button onClick={() => args.changeLanguage ('tr')}>Türkçe</button>
            <button onClick={() => args.changeLanguage ('en')}>English</button>
            <button onClick={() => args.changeLanguage ('ar')}>Arabic</button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
