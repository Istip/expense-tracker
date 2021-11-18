import React from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from '../hooks/useCollection';

// components
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Summary from '../components/Summary';

// UI imports
import Divider from '../components/UI/Divider';

const Home = () => {
  const { user } = useAuthContext();

  const query = ['uid', '==', user.uid];
  const orderBy = ['createdAt', 'desc'];
  const { documents, error } = useCollection('transactions', query, orderBy);

  return (
    <Container>
      <Componenet>
        <TransactionForm uid={user.uid} />
      </Componenet>

      <Summary transactions={documents} />

      <Componenet>
        {error && (
          <small>
            <Divider />
            {error}
          </small>
        )}
        {documents && <TransactionList transactions={documents} />}
      </Componenet>
    </Container>
  );
};

// styled components
const Container = styled.div``;

const Componenet = styled.div``;

export default Home;
