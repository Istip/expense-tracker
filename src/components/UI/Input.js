import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  if (props.label) {
    return (
      <InputWrapper>
        <Label>
          {props.label}
          <br />
          <InputContainer>
            <InputIcon>{props.icon || '✖'}</InputIcon>
            <InputField {...props} />
          </InputContainer>
        </Label>
      </InputWrapper>
    );
  }

  return (
    <InputWrapper>
      <InputContainer>
        <InputIcon>{props.icon || '✖'}</InputIcon>
        <InputField {...props} />
      </InputContainer>
    </InputWrapper>
  );
};

// styled components
const InputWrapper = styled.div`
  margin-bottom: 12px;
  text-align: left;
`;

const InputContainer = styled.div`
  position: relative;

  i {
    color: #4e3f7a;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0;
  width: 35px;
  height: 35px;
  border-radius: 4px 0 0 4px;
  background: #f0ebff;
  border: 1px solid #8168c9;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
  display: flex;
  width: 100%;
  height: 35px;
  outline: none;
  border: 1px solid #8168c9;
  border-radius: 4px;
  padding: 4px 12px 4px 47px;
  color: #1a1529;
  display: inline-block;
  font-size: 16px;
`;

const Label = styled.label`
  /* font-weight: bold; */
`;

export default Input;
