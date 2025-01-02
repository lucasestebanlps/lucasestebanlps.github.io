import React from 'react';
import PropTypes from 'prop-types';
import './button.css'

const Button = ({ label, onClick, url, className }) => {
  if (url) {
    return (
      <a href={url} className={className} target='_blank' rel="noopener noreferrer">
        {label}
      </a>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
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
};

export default Button;