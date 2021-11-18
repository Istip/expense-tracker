import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <ButtonWrapper {...props}>
      {props.icon && (
        <ButtonIcon>
          <i className={`${props.icon}`} />
        </ButtonIcon>
      )}
      {props.children}
    </ButtonWrapper>
  );
};

// styled components
const ButtonWrapper = styled.button`
  outline: none;
  border: 1px solid #8168c9;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  transition: 250ms ease;
  color: #8168c9;
  background: #f0ebff;
  font-size: 16px;

  &:hover {
    background: #ddd1ff;
  }
`;

const ButtonIcon = styled.span`
  margin-right: 8px;
`;

export default Button;
