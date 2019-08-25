import React, { Component } from 'react';
import styles from './App.css';

console.log(styles); // 콘솔에 무억이 출력되나요

class App extends Component () {
  render() {
    return (
    <div className={styles.box}></div>
    );
  }
}

export default App;
