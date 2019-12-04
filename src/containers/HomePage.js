import React from 'react';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import UrlList from '../components/url/UrlList';
import createUrl from '../actions/urlActions';
import getUrls from '../selectors/urlSelectors';

// eslint-disable-next-line react/prop-types
const HomePage = ({ urlList, handleSubmit }) => {

  return (
    <>
      <UrlForm handleSubmit={handleSubmit} />
      <UrlList urlList={urlList} />
    </>
  );
};

const mapStateToProps = state => ({
  urlList: getUrls(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, shortUrl, longUrl) {
    event.preventDefault();
    dispatch(createUrl(shortUrl, longUrl));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
