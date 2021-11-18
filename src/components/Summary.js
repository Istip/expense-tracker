import React from 'react';
import styled from 'styled-components';

const Summary = ({ transactions }) => {
  // Calculating total expenses
  const newTotal =
    (transactions &&
      transactions
        .map((item) => parseInt(item.ammount))
        .reduce((a, b) => {
          return a + b;
        }, 0)) ||
    0;

  return (
    <SummaryWrapper>
      <div>
        <b>BALANCE:</b>
      </div>
      <MoneyWrapper>
        <h1>
          {newTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')}
        </h1>
        <p> LEI</p>
      </MoneyWrapper>
    </SummaryWrapper>
  );
};

// styled components
const SummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #4e3f7a;
  margin: 20px;
`;

const MoneyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default Summary;
