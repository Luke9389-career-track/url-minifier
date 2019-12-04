import { post, get } from './request';

const URL_URL = 'http://localhost:7890/api/v1/url';
const LINKS_URL = 'http://localhost:7890/api/v1/links';

export const postUrl = (customUrl = null, longUrl) => post(`${URL_URL}`, { customUrl, longUrl });

export const getUrlList = userId => get(`${LINKS_URL}/${userId}`);


