import { CREATE_URL } from '../actions/urlActions';

const initialState = [{
  longUrl: 'longlonglonglonglonglonglonglonglonglong',
  shortUrl: 'shortshortshort',
  hits: 1003,
  dateCreated: 'December 3rd 2019'
},
{
  longUrl: 'longlonglonglonglonglonglonglonglonglong',
  shortUrl: 'shortshortshort',
  hits: 1003,
  dateCreated: 'December 3rd 2019'
},
{
  longUrl: 'longlonglonglonglonglonglonglonglonglong',
  shortUrl: 'shortshortshort',
  hits: 1003,
  dateCreated: 'December 3rd 2019'
},
{
  longUrl: 'longlonglonglonglonglonglonglonglonglong',
  shortUrl: 'shortshortshort',
  hits: 1003,
  dateCreated: 'December 3rd 2019'
}];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_URL:
      return [...state, action.payload];
    default: 
      return state;
  }
}
