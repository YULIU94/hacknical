import React from 'react';
import PropTypes from 'prop-types';
import {
  PortalModal,
  ShortMessage,
  FloatingActionButton,
} from 'light-ui';
import ResumeComponent from 'SHARED/components/ResumeComponent';
import styles from '../../styles/modal.css';

const ResumeModal = (props) => {
  const {
    login,
    resume,
    onClose,
    onShare,
    onDownload,
    openModal,
    shareInfo
  } = props;

  return (
    <PortalModal
      showModal={openModal}
      onClose={onClose}
    >
      <div className={styles.modalContainer}>
        <ResumeComponent
          login={login}
          resume={resume}
          shareInfo={shareInfo}
        />
        {openModal ? <ShortMessage text="按 ESC 即可退出预览" /> : ''}
        <FloatingActionButton
          icon="share-alt"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '15%',
            zIndex: '11'
          }}
          color="green"
          onClick={onShare}
        />
        <FloatingActionButton
          icon="download"
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '15%',
            zIndex: '11'
          }}
          color="green"
          onClick={onDownload}
        />
      </div>
    </PortalModal>
  );
};

ResumeModal.propTypes = {
  openModal: PropTypes.bool,
  onClose: PropTypes.func,
  onShare: PropTypes.func,
  onDownload: PropTypes.func,
  resume: PropTypes.object,
  shareInfo: PropTypes.object,
};

ResumeModal.defaultProps = {
  openModal: false,
  onClose: () => {},
  onShare: () => {},
  onDownload: () => {},
  resume: {},
  shareInfo: {},
};

export default ResumeModal;
