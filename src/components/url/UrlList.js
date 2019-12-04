import React from 'react';
import PropTypes from 'prop-type';
import UrlCard from './UrlCard';

const Urls = (urlList) => {
  const urlLinks = urlList.map(url => (
    <UrlCard key={`${url.shortUrl}-${url.longUrl}`} url={url} />
  ));

  return (
    <section>
      {urlLinks}
    </section>
  );
};

Urls.PropTypes = {
  urlList: PropTypes.arrayOf(PropTypes.shape({
    shortUrl: PropTypes.string.isRequired,
    longUrl: PropTypes.string.isRequired,
  })).isRequired
};

export default Urls;
