import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UrlCard.css';

function UrlCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.UrlCard}>
      <div className={styles.titleSection}>
        <p>Short Url</p>
        <button 
          className={`${styles.dropButton} ${open ? styles.up : styles.down} `} 
          onClick={()=>{
            open ? setOpen(false) : setOpen(true);
          }
          } id='drop-button'>⌃</button>
      </div>
      <div id='drawer' className={`${styles.drawer} ${open ? styles.open : styles.closed} `}>
        <div className='info'>
          <p>Short URL: <span>{props.shortUrl}</span></p>
          <p>Long URL: <span>{props.longUrl}</span></p>
          <p>Hits: <span>{props.hits}</span></p>
          <p>Date Created: <span>{props.dateCreated}</span></p>
        </div>
        <img src='../../../assets/heatmap.png' id='map'></img>
      </div>
    </div>
  );
}

UrlCard.propTypes = {
  longUrl: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  hits: PropTypes.number.isRequired,
  dateCreated: PropTypes.string.isRequired
};

export default UrlCard;
