import React, { useState } from 'react';
import './SeatAllocation.css'; // You can define your CSS styles in SeatAllocation.css
import { Navbar } from '../Navbar/Navbar';
import Modal from 'react-modal';

export function SeatAllocation() {
    // Dummy data for dormitory rooms and applicants
  const [rooms, setRooms] = useState([
    { id: 1, seats: [{ id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image' },
    { },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' }] }, // Example room with 4 empty seats
    { id: 2, seats: [{ id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image' },
    {  },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { }] }, // Example room with 4 empty seats
    { id: 3, seats: [{ },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { },{}] }, // Example room with 4 empty seats
    { id: 4, seats: [{ id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image' },
    {},
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' }] }, // Example room with 4 empty seats
    // Add more rooms as needed
  ]);

  const [applicants] = useState([
    { id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image' },
    // Add more applicants as needed
  ]);

  const [cancellationRequests] = useState([
    { id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application'},
    // Add more applicants as needed
  ]);

  const [changeRequests] = useState([
    { id: 101, name: 'John Doe', department: 'Computer Science', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application' },
    { id: 102, name: 'Jane Smith', department: 'Engineering', image: 'url_to_image', reason: 'I want to cancel my application'},
    // Add more applicants as needed
  ]);

  const [draggedApplicant, setDraggedApplicant] = useState(null);

  const handleDrop = (roomId, seatIndex) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomId].seats[seatIndex] = draggedApplicant;
    setRooms(updatedRooms);
  };

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [applicantListVisible, setApplicantListVisible] = useState(true);
  const [changeListVisible, setChangeListVisible] = useState(false);
  const [cancelListVisible, setCancelListVisible] = useState(false);

  const[cancelModalVisible, setCancelModalVisible] = useState(false);
  const[changeModalVisible, setChangeModalVisible] = useState(false);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setCancelModalVisible(true);
  };  
  const handleChangeRequest = (request) => {
    setSelectedRequest(request);
    setChangeModalVisible(true);
  };  

  const handleCancellationAccept = () => {
    // Handle accept logic here
    // For example, remove the request from the list
    setCancellationRequests(cancellationRequests.filter(request => request.id !== selectedRequest.id));
    setModalVisible(false);
    setSelectedRequest(null);
  };
  const handleChangeAccept = () => {

    // Handle accept logic here
    // For example, remove the request from the list
    setChangeRequests(changeRequests.filter(request => request.id !== selectedRequest.id));
    setChangeModalVisible(false);
    setSelectedRequest(null);
  };

  const setCancellationRequests = (filter) => {
    throw new Error('Function not implemented.');
  };
  const setChangeRequests = (filter) => {
    throw new Error('Function not implemented.');
  };

  const handleCancellationReject = () => {
    // Handle reject logic here
    // For example, keep the request in the list
    setCancelModalVisible(false);
    setSelectedRequest(null);
  };
  const handleChangeReject = () => {
    // Handle reject logic here
    // For example, keep the request in the list
    setCancelModalVisible(false);
    setSelectedRequest(null);
  };

  return (

    <div className="SeatAllocation">

        <Navbar />
      <div className="room-list-container">
        <div className="room-list">
          {rooms.map((room, index) => (
            <div key={room.id} className="room-card">
              <h3>Room {room.id}</h3>
              <div className="seat-container">
                {room.seats.map((seat, seatIndex) => (
                  <div
                    key={seatIndex}
                    className="seat"
                    onDragOver={(e) => e.preventDefault()} // Allow dropping onto the seat
                    onDrop={() => handleDrop(index, seatIndex)} // Handle drop event
                  >
                    {seat.name ? (
                      <div>
                        <img src={seat.image} alt={seat.name} />
                        <p>{seat.name}</p>
                        <p>ID: {seat.id}</p>
                        <p>Department: {seat.department}</p>
                      </div>
                    ) : (
                      <div className="empty-seat">
                        Empty Seat
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {applicantListVisible && !changeListVisible && !cancelListVisible && (
        {changeListVisible : false, cancelListVisible : false},
        
        <div className="applicant-list-container">
          <div className="applicant-list">
            <h2>Applicants</h2>
            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                draggable
                className="applicant"
                onDragStart={() => setDraggedApplicant(applicant)}
                onDragEnd={() => setDraggedApplicant(null)}
              >
                <img src={applicant.image} alt={applicant.name} />
                <p>{applicant.name}</p>
                <p>ID: {applicant.id}</p>
                <p>Department: {applicant.department}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {cancelListVisible && !applicantListVisible && !changeListVisible && (

        {applicantListVisible : false, changeListVisible : false},
        <div className="cancellation-requests-list-container">
          <div className="cancellation-requests-list">
            <h2>Cancellation Requests</h2>
            {cancellationRequests.map((request) => (
              <div
                key={request.id}
                className="cancellation-request"
                onClick={() => handleRequestClick(request)}
              >
                <img src={request.image} alt={request.name} />
                <p>{request.name}</p>
                <p>ID: {request.id}</p>
                <p>Department: {request.department}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {changeListVisible && !applicantListVisible && !cancelListVisible && (

        {applicantListVisible : false, cancelListVisible : false},
        <div className="change-requests-list-container">
          <div className="change-requests-list">
            <h2>Change Requests</h2>
            {changeRequests.map((request) => (
              <div
                key={request.id}
                className="change-request"
                onClick={() => handleChangeRequest(request)}
              >
                <img src={request.image} alt={request.name} />
                <p>{request.name}</p>
                <p>ID: {request.id}</p>
                <p>Department: {request.department}</p>
              </div>
            ))}
          </div>
        </div>
      )}


      <div className="seat-alloc-buttons">
        <button onClick={() => {setApplicantListVisible(true);setChangeListVisible(false);setCancelListVisible(false);}}>Show Applicants</button>
        <button onClick={() => {setChangeListVisible(true);setApplicantListVisible(false);setCancelListVisible(false);}}>Show Change Requests</button>
        <button onClick={() => {setCancelListVisible(true);setApplicantListVisible(false);setChangeListVisible(false);}}>Show Cancellation Requests</button>
      </div>
      
      {changeModalVisible && selectedRequest && (
      <Modal
        isOpen={changeModalVisible}
        onRequestClose={() => setModalVisible(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Change Request Details</h2>
        <img src={selectedRequest.image} alt={selectedRequest.name} />
        <p>{selectedRequest.name}</p>
        <p>ID: {selectedRequest.id}</p>
        <p>Department: {selectedRequest.department}</p>
        <p>Reason: {selectedRequest.reason}</p>

        {/* this input field will take a room no which is in the preffered list given by the applicant &
        the applicant will be alloted into that room */}
        <input type="text" placeholder="Enter Allotted Room No" />
        <div className="modal-buttons">
          <button onClick={handleChangeAccept}>Accept</button>
          <button onClick={handleChangeReject}>Reject</button>
        </div>
      </Modal>
      )}

      {cancelModalVisible && selectedRequest && (
      <Modal
        isOpen={cancelModalVisible}
        onRequestClose={() => setModalVisible(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Cancellation Request Details</h2>
        <img src={selectedRequest.image} alt={selectedRequest.name} />
        <p>{selectedRequest.name}</p>
        <p>ID: {selectedRequest.id}</p>
        <p>Department: {selectedRequest.department}</p>
        <p>Reason: {selectedRequest.reason}</p>
        <div className="modal-buttons">
          <button onClick={handleCancellationAccept}>Accept</button>
          <button onClick={handleCancellationReject}>Reject</button>
        </div>
      </Modal>
      )}

    </div>
  );
}

export default SeatAllocation;
