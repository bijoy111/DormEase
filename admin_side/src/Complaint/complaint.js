import React, { useState } from 'react';
import { Navbar } from "../Navbar/Navbar";
import './complaint.css';

export function Complaint() {

  const [complaints, setComplaints] = useState([
    { id: 1, title: 'Internet Connection Issue', submissionDate: '2024-02-07', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'pending' },
    { id: 2, title: 'Library Book Unavailability', submissionDate: '2024-02-06', details: 'Nulla facilisi. Sed non felis eget velit aliquet.', status: 'seen' },
    { id: 3, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    { id: 4, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    { id: 5, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    // Add more complaints as needed
  ]);

  const handleStatusChange = (complaintId, newStatus) => {
    const updatedComplaints = complaints.map(complaint => {
      if (complaint.id === complaintId) {
        return { ...complaint, status: newStatus };
      }
      return complaint;
    });
    setComplaints(updatedComplaints);
  };

  const handleDelete = (complaintId) => {
    const updatedComplaints = complaints.filter(complaint => complaint.id !== complaintId);
    setComplaints(updatedComplaints);
  };



  // const [sortBy, setSortBy] = useState(null);

  const sortComplaints = (sortBy) => {
    const sortedComplaints = [...complaints];
    switch (sortBy) {
      case 'pending':
      case 'seen':
      case 'processing':
      case 'completed':
        sortedComplaints.sort((a, b) => {
          if (a.status === sortBy && b.status === sortBy) {
            // If both complaints have the same status, sort by submission date
            return new Date(a.submissionDate) - new Date(b.submissionDate);
          } else if (a.status === sortBy) {
            // Older complaints (earlier submission date) should display first
            return -1;
          } else if (b.status === sortBy) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      default:
        sortedComplaints.sort((a, b) => a.id - b.id);
    }
    setComplaints(sortedComplaints);
  };


  const complaintStats = {
    total: complaints.length,
    pending: complaints.filter(complaint => complaint.status === 'pending').length,
    seen: complaints.filter(complaint => complaint.status === 'seen').length,
    processing: complaints.filter(complaint => complaint.status === 'processing').length,
    completed: complaints.filter(complaint => complaint.status === 'completed').length,
  };


  return (
    <div className="ComplaintBox">
      <Navbar />
      <div className="complaints-list">
        <h2>Complaints</h2>
        {complaints.map(complaint => (
          <div key={complaint.id} className="complaint">
            <h3>{complaint.title}</h3>
            <p>Submission Date: {complaint.submissionDate}</p>
            <p>{complaint.details}</p>
            <div className="progress-bar">
              <div className="circle-container">
                <div className={`circle ${complaint.status === 'pending' ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.id, 'pending')}>
                  <p>Pending</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.status === 'seen' ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.id, 'seen')}>
                  <p>Seen</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.status === 'processing' ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.id, 'processing')}>
                  <p>Processing</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.status === 'completed' ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.id, 'completed')}>
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <button onClick={() => handleDelete(complaint.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="complaint-stats">
        <h2>Complaint Stats</h2>
        <div className="div-stat">
          <div>Total Complaints: {complaintStats.total}</div>
          <div>Pending Complaints: {complaintStats.pending}</div>
          <div>Seen Compliants: {complaintStats.seen}</div>
          <div>Complaints Under Processing: {complaintStats.processing}</div>
          <div>Complaints Completed: {complaintStats.completed}</div>
        </div>
        <div className="sorting-buttons">
          {/* <button onClick={() => setSortBy(null)}>Reset Sort</button> */}
          <button onClick={() => sortComplaints('pending')}>Sort by Pending</button>
          <button onClick={() => sortComplaints('seen')}>Sort by Seen</button>
          <button onClick={() => sortComplaints('processing')}>Sort by Processing</button>
          <button onClick={() => sortComplaints('completed')}>Sort by Completed</button>
        </div>
        <div className="nb">
          <p>N.B: Complaints with same status are sorted by submission date</p>
        </div>
      </div>


    </div>
  );
}