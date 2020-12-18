import React from 'react';
import preloader from './../../../assets/img/loading.gif';
import styles from './preloader.module.css';

const Preloader = () => {
  return <div className={styles.preloader}>
    <img src={preloader} alt="preloader"/>
  </div>
}

export default Preloader;