import * as React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/actions';

export const mapStateToProps = state => {
  return {
    articles: state.news.articles,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});
