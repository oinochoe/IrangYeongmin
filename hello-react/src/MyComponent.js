import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name : '기본 이름'
  }

  static propTypes = {
    name : PropTypes.string,
    age : PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  render() {
    return (
      <div>
        안녕하세요 제 이름은 {this.props.name}입니다.
        내 나이는 {this.props.age} 입니다.
        숫자 : {this.state.number}
        <button onClick={() => {
          this.setState({
            number : this.state.number + 1
          })
        }}></button>
      </div>
    )
  }
}

export default MyComponent;