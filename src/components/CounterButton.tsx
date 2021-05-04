import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  handleClick: () => void;
}

const StyledButton = styled.div`
  background-color: cornflowerblue;
  width: 50%;
  max-width: 300px;
  height: 80px;
  line-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  font-size: 30px;
  box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
  transition: all 0.25s cubic-bezier(0.310, -0.105, 0.430, 1.400);

  &:hover {
    background-color: #3d7aeb;
  }  
`;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, handleClick } = props;
  return (
    <StyledButton onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;