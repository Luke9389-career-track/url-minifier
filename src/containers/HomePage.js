import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import Urls from '../components/url/Urls';
import { loadUrlList, createUrl } from '../actions/urlActions';
import { getUrls } from '../selectors/urlSelectors';
import { getUrlList } from '../services/url';
import { getSessionId } from '../selectors/sessionSelectors';

// eslint-disable-next-line react/prop-types
const HomePage = ({ urlList, handleSubmit, userId }) => {

  useEffect(() => {
    getUrlList(userId)
      .then(list => {
        list ? loadUrlList(list) : null;
      });

  });

  return (
    <>
      <UrlForm handleSubmit={handleSubmit} />
      {urlList && <Urls urlList={urlList} />}
    </>
  );
};

const mapStateToProps = state => ({
  userId: getSessionId(state),
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
