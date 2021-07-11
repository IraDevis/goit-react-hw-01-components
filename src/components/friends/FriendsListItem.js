import React from 'react';
import PropTypes from 'prop-types';
import userDefault from '../../images/userDeafault.png';
import styles from './FriendListItem.module.css';

const FriendListItem = ({name, avatar, isOnline}) => {
      return (
    <>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img className={styles.avatar} src={avatar} alt="avatar" width="60" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: userDefault,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;