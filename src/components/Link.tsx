import React, { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

interface LinkProps {
    to: string;
}

const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  bottom: 5vw;
  color: gray;

  &:hover {
    color: #494949;
  }
`;

const CustomLink = (props: PropsWithChildren<LinkProps>) => {
  const { children, to} = props;
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;