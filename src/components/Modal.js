import React, { useEffect, useState, useRef } from "react";
import images from "../images.js";

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
          <div className='modal-contents'>
            <div className='mcontent text'>
              <h2>{info.group}</h2>
              <p>
                <b>Population:</b> {info.population}
              </p>
              <p>
                <b>Location:</b> {info.location}
              </p>
              <p>
                <b>Language Family:</b> {info.language}
              </p>
              <p>{info.description}</p>
            </div>
            <div className='mcontent portrait'>
              <img src={images[info.id]}></img>
            </div>
          </div>
        )}

        <div className='return'>
          <div className='return-button' onClick={handleClose}>
            <h4>Return</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
