import React, { useState, useRef, useEffect } from 'react';
import HistoryPop from './HistoryPop';
import "./Test.css";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <HistoryPop></HistoryPop>
      </div>
    </div>
  );
};

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>내 페이지</h1>
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Test;
