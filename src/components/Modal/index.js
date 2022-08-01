import React from "react";

function Modal({ currentPhoto }) {
  // destructure currentPhoto state from PhotoList components
  const { name, category, description, index } = currentPhoto;

  return (
    //JSX
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button">Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
