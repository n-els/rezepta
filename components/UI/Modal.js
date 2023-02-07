import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="flex fixed h-screen w-screen justify-center items-center bg-[#8f8f8f] backdrop-blur-sm bg-opacity-50 top-0 left-0 right-0">
      {children}
    </div>
  );
};

export default Modal;
