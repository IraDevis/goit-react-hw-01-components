import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';

import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
            <li key={id} className="friend-item">
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        )
      })}
    </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default FriendList;