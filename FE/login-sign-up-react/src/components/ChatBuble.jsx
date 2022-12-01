import React from 'react';
import { useState } from 'react';
import avatar2 from '../images/avatar2.png';
import chatBuble from '../styles/chatBuble.css';
import PropTypes from 'prop-types';

function ChatBuble({
    name, 
    date,
    valueComent,
    imageUser,
}) {
  return (
    <div className="card chat-buble mt-4">
        <div className="card-body">
        <div className="container row m-3">
            <div className="col-1 img-user-coment-container">
                <div className="text-center">
                    <img className='img-user-coment' src={imageUser} />
                </div>
            </div>
            <div className="col-10 m-2">
                <div className="user-name-coment">
                    <p className='title fw-semibold'>{name}</p>
                    <p className='date-coment text-muted fst-italic'>{date}</p>
                </div>
                <div className="user-coment-text">
                    <p className="coment-value-real">{valueComent}
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

ChatBuble.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    valueComent: PropTypes.string.isRequired,
    imageUser: PropTypes.string.isRequired,
  };

export default ChatBuble;
