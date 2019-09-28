import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = ({onLoginClick, logged}) => (
  <footer className={cx('footer')}>
    <Link to="/" className={cx('brand')}>홈으로갈래?</Link>
    <div onClick={onLoginClick} className={cx('admin-login')}>
      { logged ? '나갈래' : '글써야지' }
    </div>
  </footer>
);

export default Footer;
