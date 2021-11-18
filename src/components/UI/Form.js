import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
  return <FormWrapper {...props}>{props.children}</FormWrapper>;
};

const FormWrapper = styled.form`
  color: #1a1529;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px;
  padding: 30px 20px;
  border-radius: 4px;
  background: #faf9ff;
  border: 1px solid #d3c4ff;
  text-align: center;

  h2 {
    margin-bottom: 12px;
  }
`;

export default Form;
