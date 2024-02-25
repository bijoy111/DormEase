import React, { useState } from 'react';
import './disbursement.css';

function DisbursementPage() {
  const [giverName, setGiverName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  const [disbursements, setDisbursements] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDisbursement = {
      giverName,
      receiverName,
      amount,
      date: new Date().toLocaleString(),
    };
    setDisbursements([...disbursements, newDisbursement]);
    setGiverName('');
    setReceiverName('');
    setAmount('');
  };

  return (
    <div className="container">
      <h2>Disbursement List</h2>
      <div className="disbursement-list">
        <ul>
          {disbursements.map((disbursement, index) => (
            <div className='list-item'>
            <li key={index}>
              <p>Giver: {disbursement.giverName}</p>
              <p>Receiver: {disbursement.receiverName}</p>
              <p>Amount: {disbursement.amount} BDT</p>
              <p>Date & Time: {disbursement.date}</p>
            </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="disbursement-form">
        <h2>Add New Disbursement</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="giverName">Giver Name:</label>
            <input
              type="text"
              id="giverName"
              value={giverName}
              onChange={(e) => setGiverName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="receiverName">Receiver Name:</label>
            <input
              type="text"
              id="receiverName"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DisbursementPage;
