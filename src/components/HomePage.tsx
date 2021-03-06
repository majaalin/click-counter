import React, { Component } from 'react';
import Layout from "./Layout";
import Animation from "./Animation";
import Button from './CounterButton';
import Link from './Link';
import styled from 'styled-components';

interface Props {
  increment: () => void;
}

const StyledHeading = styled.h1`
  color: cornflowerblue;
  font-size: 4em;
`;

export default class HomePage extends Component {
  render() {
    const { increment } = this.props as Props;
    return (
      <Layout>
        <StyledHeading>Click Counter</StyledHeading>
        <Animation>
          <Button handleClick={increment}>
            Click
          </Button>
        </Animation>
        <Link to="/number-of-clicks">{`Check number of clicks >`}</Link>
      </Layout>
    );
  }
}