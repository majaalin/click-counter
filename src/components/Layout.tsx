import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface LayoutProps {
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  text-align: center;
`;

const Layout = (props: PropsWithChildren<LayoutProps>) => {
    const { children } = props;
    return (
        <StyledLayout>{children}</StyledLayout>
    );
}

export default Layout;