/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  type = 'text',
  name = 'form-control form-control-sm',
  value,
  placeholder,
  onChange,
}) {
  const [hidePassword, setHidePassword] = React.useState(false);
  const [inputType, setInputType] = React.useState(type);
  return (
    <div className="input-group">
      <span className="input-group-text">
        <i className="fa-solid fa-lock"></i>
      </span>
        <input
          className= {name} 
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={inputType}
        />
      <span className="input-group-text">
      {type === 'password' && (hidePassword ? (
        <i 
        className="fa-solid fa-eye hide-password"
        onClick={() => {
          setHidePassword(!hidePassword);
          setInputType('password');
        }}
        />
        ) : (
          <i 
          className="fa-sharp fa-solid fa-eye-slash hide-password"
          onClick={() => {
            setHidePassword(!hidePassword);
            setInputType('text');
        }}
        />
        ))}
      </span>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
