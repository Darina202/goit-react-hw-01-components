import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import styles from '../FriendListItem/FriendListItem.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
