import styles from './styles.module.scss';

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Aladin...</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            alt=""
            className={styles.menu_img}
          />
          <div className={styles.col}>
            <span>Welcome back, </span>
            <h3>dfd</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button>Register</button>
          <button>Login</button>
        </div>
      )}
      <ul>
        <li href="/profile">Account</li>
        <li href="/profile/orders">My Orders</li>
        <li href="/profile/message">Message</li>
        <li href="/profile/address">Address</li>
        <li href="/profile/wishlist">Wishlist</li>
      </ul>
    </div>
  );
};

export default UserMenu;
