import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        <span>miniBlog</span>
      </NavLink>
      <div className={styles.menu} onClick={() => {setMenuOpen(!menuOpen)
        console.log(menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? `${styles.links_list} ${styles.open}` : styles.links_list}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to='/posts/create' className={({ isActive }) => (isActive ? styles.active : '')}>Novo post</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard' className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
