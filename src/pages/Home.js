import React from 'react';
import styled from 'styled-components';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
  const { user } = useAuthContext();

  const query = ['uid', '==', user.uid];
  const orderBy = ['createdAt', 'desc'];
  const { documents, error } = useCollection('transactions', query, orderBy);

  return (
    <>
      <h1>Transactions</h1>
      <Container>
        <div>Transactions list</div>
        <div>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents} />}
        </div>
        <div>
          <TransactionForm uid={user.uid} />
        </div>
      </Container>
    </>
  );
};

// styled components
const Container = styled.div``;

export default Home;
