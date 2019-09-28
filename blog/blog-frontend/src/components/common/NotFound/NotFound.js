import React from 'react';
import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => (
  <div className={cx('not-found')}>
    <h2>
      이랑이와 영민이의 홈을 벗어났습니다.
    </h2>
    <Button onClick={onGoBack} theme="outline">
      돌아가기
    </Button>
  </div>
);

export default NotFound;