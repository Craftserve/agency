import { NavbarStyle, HamburgerButton } from "./style";
import logo from "./../../../../assets/icons/LogoDark.svg";
import { Link } from "react-router-dom";
import Button from "../button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useRef } from "react";

const Navbar = () => {
    const menuRef = useRef<HTMLUListElement | null>(null);

    const toggleMenu = (): void => {
        const menu = menuRef.current;
        if (!menu) return;

        const isInvisible = menu.classList.contains("invisible");

        if (isInvisible) {
            menu.classList.remove("invisible", "closeMenu");
            menu.classList.add("openMenu");
        } else {
            menu.classList.remove("openMenu");
            menu.classList.add("closeMenu");

            setTimeout(() => {
                if (menu.classList.contains("closeMenu")) {
                    menu.classList.add("invisible");
                }
            }, 500);
        }
    };

    return (
        <NavbarStyle>
            <div className="logo-wrap">
                <img className="logo-img" src={logo} alt="logo" />
                <span>Vitresoft</span>
            </div>
            <ul className="nav-menu" ref={menuRef}>
                <li>
                    <Link className="nav-link" to="/whyus">
                        Dlaczego my
                    </Link>
                </li>
                <li>
                    <Button colorVariant="secondary" height="48px" width="113px" fontSize="16px">
                        <FaPhoneAlt />
                        Kontakt
                    </Button>
                </li>
            </ul>
            <HamburgerButton onClick={toggleMenu}>
                <IoMenu />
            </HamburgerButton>
        </NavbarStyle>
    );
};

export default Navbar;
