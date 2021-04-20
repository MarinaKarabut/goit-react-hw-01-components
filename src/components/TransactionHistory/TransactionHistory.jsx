import React from 'react';
import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css';


function TransactionHistory({items}) {
    const transactionElements = items.map(({id, type, amount, currency}) => (
        <tr key= {id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ))
    return (
        <section className ="transactions">
            <table className={styles.transactionHistory}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {transactionElements}
                </tbody>
            </table>
        </section>
    )
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
  }
  


