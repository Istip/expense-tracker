import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import styled from 'styled-components';

// UI imports
import Button from './UI/Button';

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore('transactions');

  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem key={transaction.id}>
          <ListDescription>
            <h3>{transaction.name}</h3>
            <p>
              <b>{transaction.ammount}</b> LEI
            </p>
          </ListDescription>

          <Button
            onClick={() => deleteDocument(transaction.id)}
            icon="fas fa-trash"
          >
            DELETE
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

// styled components
const List = styled.ul`
  margin: 20px;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #faf9ff;
  border-left: 3px solid #a384ff;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
`;

const ListDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h3 {
    width: 75%;
  }
`;

export default TransactionList;
