import styles from "./styles.module.css"

import { NavLink, Link } from "react-router-dom"

import {AiOutlineRead} from "react-icons/ai"

export default function Header() {
    return (
        <header className={styles.header}>          
                <Link className={styles.header__logo} to="/">
                    <AiOutlineRead/>
                </Link> 
            <nav className={styles.header__nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/reader/example"
                            className={({ isActive }) =>
                                isActive ? `${styles.header__navLink} ${styles.active}` : `${styles.header__navLink}`
                            }
                        >
                            Leitor Exemplo
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}