import React from 'react';

const Modal = ({ userData }) => {
  return (
    <div>
      <p>Imię: {userData.firstName}</p>
    </div>
  );
};

export default Modal;
