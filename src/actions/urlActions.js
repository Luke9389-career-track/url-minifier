import { postUrl } from '../services/url';

export const CREATE_URL = 'CREATE_URL';
export const createUrl = (shortUrl, longUrl) => dispatch => {
  postUrl(shortUrl, longUrl)
    .then(createdUrl => dispatch({
      type: CREATE_URL,
      payload: createdUrl
    }));
};

export const LOAD_URL_LIST = 'LOAD_URL_LIST';
export const loadUrlList = list => ({
  type: LOAD_URL_LIST,
  payload: list
});

