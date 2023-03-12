import Link from 'next/link';
import { FaOpencart } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';
import styles from './styles.module.scss';
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="../../../aladin-text-logoo.png" alt="" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link legacyBehavior href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
