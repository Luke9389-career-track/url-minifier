import { postUrl } from '../services/url';

export const CREATE_URL = 'CREATE_URL';
export const createUrl = (shortUrl, longUrl) => dispatch => {
  postUrl(shortUrl, longUrl)
    .then(createdUrl => dispatch({
      type: CREATE_URL,
      payload: createdUrl
    }));
};
