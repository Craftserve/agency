import {
    StyledNavbar,
    LogoWrapStyle,
    LogoStyle,
    StyledMenu,
    StyledMenuItem,
    StyledHamburgerButton,
    StyledMenuList,
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
        <StyledNavbar>
            <LogoWrapStyle>
                <LogoStyle src={logo} alt="logo" />
                <span>Vitresoft</span>
            </LogoWrapStyle>

            <StyledMenu isOpen={isMenuOpen}>
                <StyledMenuList>
                    <StyledMenuItem>
                        <Link className="nav-link" to="/whyus">
                            Dlaczego my
                        </Link>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Button variant="secondary" fontSize="16px">
                            <FaPhoneAlt />
                            Kontakt
                        </Button>
                    </StyledMenuItem>
                </StyledMenuList>
            </StyledMenu>
            <StyledHamburgerButton onClick={toggleMenu}>
                <IoMenu />
            </StyledHamburgerButton>
        </StyledNavbar>
    );
};

export default Navbar;
