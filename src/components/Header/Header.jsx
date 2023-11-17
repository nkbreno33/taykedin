import styles from './Header.module.css';

import igniteLogo from '/src/assets/ignite-logo.svg'


export default function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite" />
        </header>
    )
}