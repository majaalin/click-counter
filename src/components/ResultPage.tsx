import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from "./Layout";
import Animation from "./Animation";
import Link from "./Link";

interface Props {
  count: number;
}

const StyledHeading = styled.h1`
  color: tomato;
  font-size: 64px;
`;

export default class Resultpage extends Component {
  render() {
    const { count } = this.props as Props;
    return (
      <Layout>
        <Animation>
          <StyledHeading>{count}</StyledHeading>  
        </Animation>
        <Link to="/">{`< Go back and continue the clicking`}</Link>
      </Layout>
    );
  }
}