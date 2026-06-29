import React from 'react';
import PropTypes from 'prop-types';
import './button.css'

const Button = ({ label, onClick, url, className, ariaLabel, disabled }) => {
  if (url) {
    return (
      <a href={url} className={className} target='_blank' rel="noopener noreferrer" aria-label={ariaLabel}>
        {label}
      </a>
    );
  } else {
    return (
      <button className={className} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
        {label}
      </button>
    );
  }
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  url: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;