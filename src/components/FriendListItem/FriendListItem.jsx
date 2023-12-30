import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline = false }) => {
  const status = isOnline ? styles.statusTrue : styles.status;
  return (
    <li className={styles.item}>
      <span className={status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
