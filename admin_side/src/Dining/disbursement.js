import React, { useState } from 'react';
import './disbursement.css';
import { Navbar } from '../Navbar/Navbar';

function DisbursementPage() {
  const [giverName, setGiverName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');
  const [disbursements, setDisbursements] = useState([
    { giverName: 'Alice Johnson', receiverName: 'Bob Brown', amount: '300', date: '2024-02-11 14:45:00' },
    { giverName: 'John Doe', receiverName: 'Jane Smith', amount: '500', date: '2024-02-12 10:30:00' },
    // Add more previous disbursements as needed
  ]);
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDisbursement = {
      giverName,
      receiverName,
      amount,
      date: new Date().toLocaleString(),
    };
    setDisbursements([newDisbursement, ...disbursements]);
    setGiverName('');
    setReceiverName('');
    setAmount('');
  };

  const handleMonthFilter = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Filter disbursements based on selected month
  const filteredDisbursements = selectedMonth ? disbursements.filter(disbursement => {
    const disbursementMonth = new Date(disbursement.date).getMonth().toLocaleString();
    return disbursementMonth === selectedMonth;
  }) : disbursements;

  return (
    <div className="container">

      <Navbar />

      {/* Disbursement List */}
      <div className="disbursement-list">
        
      <div className='back-button'>
            {/* back icon */}
            <button onClick={() => window.history.back()}><img height="5px" width="30px" src="https://img.icons8.com/ios/50/000000/back.png"/></button>
          </div>
        <h2 className="text-lg font-semibold mb-2" >Disbursement List</h2>
        <div className="month-filter">
          <select value={selectedMonth} onChange={handleMonthFilter}>
            <option value="">All Months</option>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
        </div>
        <ul>
          {filteredDisbursements.map((disbursement, index) => (
            <div className='list-item' key={index}>
              <li>
                <p>Giver: {disbursement.giverName}</p>
                <p>Receiver: {disbursement.receiverName}</p>
                <p>Amount: {disbursement.amount} BDT</p>
                <p>Date & Time: {disbursement.date}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* Disbursement Form */}
      <div className="disbursement-form">
        <h2 className="text-lg font-semibold mb-2">Add New Disbursement</h2>
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
