import React, { useState, useEffect } from 'react';
import { Navbar } from "../Navbar/Navbar";
import './complaint.css';
import axios from 'axios';

export function Complaint() {

  const [complaints, setComplaints] = useState([
    // { id: 1, title: 'Internet Connection Issue', submissionDate: '2024-02-07', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', status: 'pending' },
    // { id: 2, title: 'Library Book Unavailability', submissionDate: '2024-02-06', details: 'Nulla facilisi. Sed non felis eget velit aliquet.', status: 'seen' },
    // { id: 3, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    // { id: 4, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    // { id: 5, title: 'Broken Chair in Reading room', submissionDate: '2024-02-05', details: 'Morbi rutrum elit quis ligula varius, eu hendrerit orci consectetur.', status: 'processing' },
    // Add more complaints as needed
  ]);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:3000/complaint', { withCredentials: true });
      const data = response.data;
      setComplaints(data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  const handleStatusChange = (complaintId, newStatus) => {
    const response = axios.post('http://localhost:3000/complaint/update', {
      comp_id: complaintId,
      stage: newStatus
    }, { withCredentials: true });

    fetchComplaints();
  };

  const handleDelete = async (comp_id) => {
    const response = await axios.delete(`http://localhost:3000/complaint/delete/${comp_id}`, { withCredentials: true });
  };

  useEffect(() => {
    fetchComplaints();
  });

  // const [sortBy, setSortBy] = useState(null);

  const sortComplaints = (sortBy) => {
    const sortedComplaints = [...complaints];
    switch (sortBy) {
      case 'pending':
      case 'seen':
      case 'processing':
      case 'completed':
        sortedComplaints.sort((a, b) => {
          if (a.stage === sortBy && b.stage === sortBy) {
            // If both complaints have the same status, sort by submission date
            return new Date(a.created_at) - new Date(b.created_at);
          } else if (a.stage === sortBy) {
            // Older complaints (earlier submission date) should display first
            return -1;
          } else if (b.stage === sortBy) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      default:
        sortedComplaints.sort((a, b) => a.complaint_id - b.complaint_id);
    }
    setComplaints(sortedComplaints);
  };


  const complaintStats = {
    total: complaints.length,
    pending: complaints.filter(complaint => complaint.stage === 1).length,
    seen: complaints.filter(complaint => complaint.stage === 2).length,
    processing: complaints.filter(complaint => complaint.stage === 3).length,
    completed: complaints.filter(complaint => complaint.stage === 4).length,
  };


  return (
    <div className="ComplaintBox">
      <Navbar />
      <div className="complaints-list">
        <h1 style={{ marginLeft: '250px', marginBottom: '20px' }}>COMPLAINTS</h1>
        {complaints.map(complaint => (
          <div key={complaint.complaint_id} className="complaint">
            <h2 style={{ marginLeft: '200px', fontWeight: 'bold', marginBottom: '10px' }}>{complaint.title}</h2>
            <h6 style={{ fontWeight: 100 }}>Submission Date: {complaint.created_at}</h6>
            <p>{complaint.body}</p>
            <div className="progress-bar">
              <div className="circle-container">
                <div className={`circle ${complaint.stage === 1 ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.complaint_id, 1)}>
                  <p>Pending</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.stage === 2 ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.complaint_id, 2)}>
                  <p>Seen</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.stage === 3 ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.complaint_id, 3)}>
                  <p>Processing</p>
                </div>
                <div className="line-container">
                  <div className="line" />
                </div>
                <div className={`circle ${complaint.stage === 4 ? 'active' : ''}`} onClick={() => handleStatusChange(complaint.complaint_id, 4)}>
                  <p>Completed</p>
                </div>
              </div>
            </div>
            <button style={{ backgroundColor: '#673AB7', color: 'white', padding: '8px', borderRadius: '10px', marginTop: '20px', marginBottom: '10px' }} onClick={() => handleDelete(complaint.complaint_id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="complaint-stats">
        <h1 style={{ marginLeft: '180px', marginBottom: '20px', marginTop: '10px' }}>COMPLAINT STATS</h1>
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