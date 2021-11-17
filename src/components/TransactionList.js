import React from 'react';
import { useFirestore } from '../hooks/useFirestore';

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore('transactions');

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <h3>{transaction.name}</h3>
          <p>{transaction.ammount} LEI</p>
          <button onClick={() => deleteDocument(transaction.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
