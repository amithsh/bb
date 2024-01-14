import React, { useState } from "react";
import Modal from "react-modal";

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = () => {
    // Perform any validation you need before submitting
    if (name && address && cardNumber) {
      onSubmit({ name, address, cardNumber });
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Enter Your Details</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  );
};

export default CheckoutModal;
