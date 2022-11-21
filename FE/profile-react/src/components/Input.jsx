import React from 'react'

export default function Input({
    type = 'text',
    name = 'form-control',
    value,
    placeholder,
    onChange,
    status,  
}) {
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
    </div>
  )
}

