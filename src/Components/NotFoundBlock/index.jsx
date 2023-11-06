import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />
        <p className={styles.description}>Ничего не найдено</p>
      </h1>
    </div>
  );
};

export default NotFoundBlock;
