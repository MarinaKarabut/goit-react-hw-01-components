import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css';
import {random} from '../helpers/helpers.js';

 
function Statistics({title, stats}) {
    const statElements = stats.map(({id, label, percentage}) => (
    <li className={styles.item} 
    style={{
        backgroundColor: `rgb(${random()},${random()}, ${random()})`,
      }}
    key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
        </li>))
        
    return (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {statElements}
        </ul>
    </section>
    )
      
};

export default Statistics;
Statistics.defaultProps = {
    stats: [],
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
  }
  
