import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UrlForm = (handleSubmit) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  return (
    <form onSubmit={event => handleSubmit(event, shortUrl, longUrl)}>
      <input type='text' value={longUrl} onChange={({ target }) => setLongUrl(target.value)} />
      <input type='text' value={shortUrl} onChange={({ target }) => setShortUrl(target.value)} />
      <button>Create</button>
    </form >
  );
};

UrlForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default UrlForm;
