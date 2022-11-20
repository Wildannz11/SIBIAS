import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons';


export default function HidePasswordBtn() {
  const input = document.querySelector('.pw');
  const [hidePassword, setHidePassword] = React.useState(false);
  return (
    <div >
      <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
      </span>
    </div>
  )
}

