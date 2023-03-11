import Add from './Add';
import styles from './styles.module.scss';
import Top from './Top';

const Header = () => {
  return (
    <header className={styles.header}>
      <Add />
      <Top />
    </header>
  );
};

export default Header;
