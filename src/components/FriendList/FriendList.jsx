import React from 'react';
import PropTypes from "prop-types";
import FriendsListItem from './FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';


function FriendList({friends}) {
    const friendElements = friends.map(({id, ...props}) => (
    <FriendsListItem key={id} {...props} />))

    return (
        <section className="friends">
            <ul className={styles.friendList}>
                {friendElements}
            </ul>
        </section>
        )
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            
        })
    ).isRequired,
  }