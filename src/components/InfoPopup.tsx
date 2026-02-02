import React, { useState } from 'react';
import './InfoPopup.css';

interface InfoPopupProps {
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'New Inquiry from Website';
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`;
    window.location.href = `mailto:connect@mantramiles.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Please provide your details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="spam-notice">Zero spam. Promise!! We hate spam too.</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InfoPopup;