import React, { Component } from 'react';
import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx('box', 'blue')}></div>
    );
  }
}

export default App;
