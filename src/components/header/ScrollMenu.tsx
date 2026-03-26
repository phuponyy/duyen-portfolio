"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from 'react-scroll';

const ScrollMenu = ({ closeMenu }) => {
    const pathname = usePathname();
    const isHomePage = pathname === "/" || pathname === "/home" || pathname === "/home-dark";

    const renderMenuItem = (label: string, sectionId: string) => {
        if (isHomePage) {
            return (
                <ScrollLink className="smooth-menu" to={sectionId} offset={-50} onClick={closeMenu}>
                    {label}
                </ScrollLink>
            );
        }

        return (
            <Link className="smooth-menu" href={`/#${sectionId}`} onClick={closeMenu}>
                {label}
            </Link>
        );
    };

    return (
        <>
            <li>
                {renderMenuItem("Skills", "services")}
            </li>
            <li>
                {renderMenuItem("Works", "portfolio")}
            </li>
            <li>
                {renderMenuItem("Education", "resume")}
            </li>
            <li>
                <Link className="smooth-menu" href="/projects" onClick={closeMenu}>Products</Link>
            </li>
            <li>
                {renderMenuItem("Contact", "contact")}
            </li>
        </>
    );
};

export default ScrollMenu;
