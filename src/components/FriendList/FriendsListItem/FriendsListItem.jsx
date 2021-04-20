import React from 'react';
import PropTypes from "prop-types";



import styles from './FriendsListItem.module.css';

function FriendsListItem({avatar, name, isOnline}) {
    return (
    <li className={styles.item}>
        <span className={isOnline? styles.online : styles.offline}>{isOnline}</span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>)
    
};

export default FriendsListItem;

FriendsListItem.defaultProps = {
    avatar: './404.jpeg',
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  

