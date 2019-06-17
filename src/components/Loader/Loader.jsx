import React from 'react';
import loaderImage from '../../assets/images/loading.svg';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.LoaderContainer}>
        <img src={loaderImage} alt="Loading..."/>
    </div>
);

export default Loader;
