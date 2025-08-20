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
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const {t} = useTranslation();

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
                            {t("WhyUs.title")}
                        </Link>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Button variant="secondary" fontSize="16px">
                            <FaPhoneAlt />
                            {t("Contact.title")}
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
