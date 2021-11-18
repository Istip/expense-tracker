import React, { useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';

// UI imports
import Button from './UI/Button';
import Form from './UI/Form';
import Input from './UI/Input';
import Divider from './UI/Divider';

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
    <>
      <Form onSubmit={handleSubmit}>
        <h2>ADD Transaction</h2>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Description"
          icon={<i className="fas fa-font"></i>}
          required
        />

        <Input
          type="number"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
          label="Ammount"
          icon={<i className="fas fa-money-bill-wave"></i>}
          required
        />

        <Divider />

        <Button type="submit" icon="fas fa-plus-circle">
          Add Transaction
        </Button>
      </Form>
    </>
  );
};

// styled components

export default TransactionForm;
