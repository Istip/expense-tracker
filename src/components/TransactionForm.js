import React, { useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [ammount, setAmmount] = useState('');

  const { addDocument, response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ name, ammount, uid });
  };

  // resetting the input field values if the response object changes
  useEffect(() => {
    if (response.success) {
      setName('');
      setAmmount('');
    }
  }, [response.success]);

  return (
    <div>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name: </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Ammount: </span>
          <input
            type="number"
            value={ammount}
            onChange={(e) => setAmmount(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
