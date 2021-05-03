import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from './store/rootStore';
import { incrementCount } from './store/counter/CounterAction';
import HomePage from './components/HomePage';
import ResultPage from './components/ResultPage';
import { Switch, Route } from 'react-router';

interface AppProps {
  increment: () => void;
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
});

class App extends Component<AppProps, AppState> {
  render(): JSX.Element {
    return <main><Switch><Route path="/" component={() => <HomePage {...this.props} />} exact/><Route path="/number-of-clicks" component={() => <ResultPage {...this.props} />}/></Switch></main>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);