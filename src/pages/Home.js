import React from 'react';
import styled from 'styled-components';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Divider from '../components/UI/Divider';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

const Home = () => {
  const { user } = useAuthContext();

  const query = ['uid', '==', user.uid];
  const orderBy = ['createdAt', 'desc'];
  const { documents, error } = useCollection('transactions', query, orderBy);

  return (
    <Container>
      <div>
        <TransactionForm uid={user.uid} />
      </div>

      <div>
        {error && (
          <small>
            <Divider />
            {error}
          </small>
        )}
        {documents && <TransactionList transactions={documents} />}
      </div>
    </Container>
  );
};

// styled components
const Container = styled.div``;

export default Home;
