import React, { useEffect, useState, useRef } from "react";

import "../styles/modal.css";

const Modal = ({ handleClose, show, info }) => {
  const node = useRef();
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    handleClose();
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className={showHideClassName}>
      <section ref={node} className='modal-main'>
        {info && (
          <div>
            <h2>{info.group}</h2>
            <p>Population: {info.population}</p>
            <p>Location: {info.location}</p>
            <p>Description: {info.description}</p>
          </div>
        )}

        <button type='button' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
