import {
    NavbarStyle,
    LogoWrapStyle,
    LogoStyle,
    MenuStyle,
    MenuItemStyle,
    HamburgerButton,
    MenuListStyle,
} from "./style";
import logo from "./../../../../assets/icons/LogoDark.svg";
import { Link } from "react-router-dom";
import Button from "../button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarStyle>
            <LogoWrapStyle>
                <LogoStyle src={logo} alt="logo" />
                <span>Vitresoft</span>
            </LogoWrapStyle>

            <MenuStyle isOpen={isMenuOpen}>
                <MenuListStyle>
                    <MenuItemStyle>
                        <Link className="nav-link" to="/whyus">
                            Dlaczego my
                        </Link>
                    </MenuItemStyle>
                    <MenuItemStyle>
                        <Button colorVariant="secondary" height="48px" width="113px" fontSize="16px">
                            <FaPhoneAlt />
                            Kontakt
                        </Button>
                    </MenuItemStyle>
                </MenuListStyle>
            </MenuStyle>
            <HamburgerButton onClick={toggleMenu}>
                <IoMenu />
            </HamburgerButton>
        </NavbarStyle>
    );
};

export default Navbar;
