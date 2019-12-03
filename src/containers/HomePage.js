import React from 'react';
import { connect } from 'react-redux';
import UrlForm from '../components/url/UrlForm';

const HomePage = () => {

  return (
    <>
      <UrlForm handleSubmit={handleSubmit} />
      <UrlList urlList={urlList} />
    </>
  );
};

const mapStateToProps = state => ({
  //TODO: get list of links the signed in user has created
});

const mapDispatchToProps = dispatch => ({
  handleSubmit({ target }) {
    dispatch(createUrl(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
