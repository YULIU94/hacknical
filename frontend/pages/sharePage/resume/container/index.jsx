import React from 'react';
import PropTypes from 'prop-types';
import ResumeComponent from 'SHARED/components/ResumeComponent';
import ResumeWrapper from 'SHARED/components/ResumeWrapper';
import styles from '../styles/share.css';

const ResumeShare = props => (
  <ResumeWrapper {...props} className={styles.container}>
    <ResumeComponent />
  </ResumeWrapper>
);

ResumeShare.propTypes = {
  hash: PropTypes.string,
  login: PropTypes.string
};

ResumeShare.defaultProps = {
  hash: window.resumeHash,
  login: window.login,
};

export default ResumeShare;
