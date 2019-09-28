import React from 'react';
import styles from './AskRemoveModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('question')}>
      <div className={cx('title')}>글 지우기</div>
      <div className={cx('description')}>이거 진짜 지울거야?</div>
    </div>
    <div className={cx('options')}>
      <Button theme="gray" onClick={onCancel}>아냐됐어</Button>
      <Button onClick={onConfirm}>지워버렷</Button>
    </div>
  </ModalWrapper>
);

export default AskRemoveModal;