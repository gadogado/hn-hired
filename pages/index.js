/* eslint-disable react/sort-comp */

import React, { Component, Fragment } from 'react';
import Comments from '../components/Comments';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import Fuse from 'fuse.js';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import fetch from 'isomorphic-fetch';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14
  }
});

const fuseOptions = {
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  threshold: 0.2,
  keys: ['text']
};

const sidebarCommentsStyle = {
  flexGrow: 1,
  zIndex: 1,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  height: '100%'
};

class App extends Component {
  state = {
    trends: {},
    comments: [],
    searchTokens: [],
    searchedComments: [],
    loading: true,
    date: null
  };

  collector = async () => {
    const url =
      process.env.NODE_ENV === 'production'
        ? '/latest/collector' // aws lambda path
        : '/collector';

    const response = await fetch(url);
    const { comments, trends, date } = await response.json();
    return { comments, trends, date };
  };

  searchComments = searchTokens => {
    const { comments } = this.state;
    const searchedComments =
      searchTokens.length !== 0
        ? this.fuse.search(searchTokens.join(' '))
        : comments;

    this.setState({ searchedComments, searchTokens });
  };

  async componentDidMount() {
    /*
        Fetch hn hiring results from aws lambda, setState, and init Fuse.js
    */
    this.collector().then(({ comments, trends, date }) =>
      this.setState(
        {
          loading: false,
          searchedComments: comments,
          date,
          comments,
          trends
        },
        () => {
          this.fuse = new Fuse(comments, fuseOptions);
        }
      )
    );
  }

  render() {
    const {
      loading,
      trends,
      searchedComments,
      searchTokens,
      date
    } = this.state;
    const asyncContent = !loading && (
      <div>
        <SearchBar
          onSearch={this.searchComments}
          searchTokens={searchTokens}
          trends={trends}
          date={date}
        />
        <div style={sidebarCommentsStyle}>
          <Sidebar
            trends={trends}
            onSearch={this.searchComments}
            searchTokens={searchTokens}
          />
          <Comments comments={searchedComments} />
        </div>
      </div>
    );

    return (
      <Fragment>
        <Header />
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Loading loading={loading} />
          {asyncContent}
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
