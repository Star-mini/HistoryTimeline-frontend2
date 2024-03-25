import React, { useState, useRef, useEffect } from 'react';
import HistoryPoptest2 from './HistoryPoptest2';
import "./Test.css";
import HistoryPoptest from './HistoryPoptest';
import Timeline from '../../timeline/Timeline';

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
      <div ref={modalRef} className="modal2">
        <HistoryPoptest2 historyId={selectedHistoryId}></HistoryPoptest2>
      </div>
    </div>
  );
};

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);


  const openModal = (historyId) => {
    setSelectedHistoryId(historyId); 
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Timeline onClickHistoryLabel={openModal} />
      <Modal isOpen={modalOpen} onClose={closeModal} selectedHistoryId={selectedHistoryId} />
    </div>
  );
};

export default Test;
