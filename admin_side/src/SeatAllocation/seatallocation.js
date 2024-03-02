import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Navbar } from '../Navbar/Navbar';
import img from '../images/common_user10.png';
import './SeatAllocation.css'; // You can define your CSS styles in SeatAllocation.css

export function SeatAllocation() {
  // Dummy data for dormitory rooms and applicants
  const [rooms, setRooms] = useState([
    {
      id: 1, seats: [{ img: img },
      {},
      { img: img },
      { img: img }]
    }, // Example room with 4 empty seats
    {
      id: 2, seats: [{ img: img },
      {},
      { img: img },
      {}]
    }, // Example room with 4 empty seats
    {
      id: 3, seats: [{},
      { img: img },
      {}, {}]
    }, // Example room with 4 empty seats
    {
      id: 4, seats: [{ img: img },
      {},
      { img: img },
      { img: img }]
    }, // Example room with 4 empty seats
    // Add more rooms as needed
  ]);

  const [applicants, setApplicants] = useState([
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    { img: img },
    // Add more applicants as needed
  ]);

  const [cancellationRequests, setCancellationRequests] = useState([
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    // Add more applicants as needed
  ]);

  const [changeRequests, setChangeRequests] = useState([
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    { img: img, reason: 'I want to cancel my application' },
    // Add more applicants as needed
  ]);

  const fetchRooms = async () => {
    const response = await axios.get('http://localhost:3000/seat_allocation');
    setRooms(response.data);
  };

  const fetchApplicants = async () => {
    const response = await axios.get('http://localhost:3000/seat_allocation/applicants');
    setApplicants(response.data);
  };

  const fetchRoomChangeApplicants = async () => {
    const response = await axios.get('http://localhost:3000/seat_allocation/room_change_applicants');
    console.log(response.data);
    setChangeRequests(response.data);
  };

  const fetchRoomCancelApplicants = async () => {
    const response = await axios.get('http://localhost:3000/seat_allocation/room_cancel_applicants');
    console.log(response.data);
    setCancellationRequests(response.data);
  };

  useEffect(() => {
    fetchRooms();
    fetchApplicants();
    fetchRoomChangeApplicants();
    fetchRoomCancelApplicants();
  }, []);

  const [draggedApplicant, setDraggedApplicant] = useState(null);

  const handleDrop = (roomId, seatIndex) => {

    let room = rooms.find(room => room.room_no === roomId);
    room.seats[seatIndex].stu_id = draggedApplicant.stu_id;
    room.seats[seatIndex].name = draggedApplicant.name;
    room.seats[seatIndex].dept = draggedApplicant.dept;
    room.seats[seatIndex].level_term = draggedApplicant.level_term;

    const response = axios.post('http://localhost:3000/seat_allocation/allocate_room', {
      stu_id: draggedApplicant.stu_id,
      room_no: roomId,
      seat_no: seatIndex
    });
    console.log(response.data);
    fetchApplicants();
    setRooms([...rooms]);
  };

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [applicantListVisible, setApplicantListVisible] = useState(true);
  const [changeListVisible, setChangeListVisible] = useState(false);
  const [cancelListVisible, setCancelListVisible] = useState(false);

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [changeModalVisible, setChangeModalVisible] = useState(false);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setCancelModalVisible(true);
  };

  const handleChangeRequest = (request) => {
    setSelectedRequest(request);
    setChangeModalVisible(true);
  };

  const handleRoomCancel = () => {
    const response = axios.post('http://localhost:3000/seat_allocation/allocate_room_cancel', {
      stu_id: selectedRequest.stu_id,
      decision: 'accept'
    });
    console.log(response.data);
    fetchRooms();
    fetchRoomCancelApplicants();
    setCancelModalVisible(false);
    setSelectedRequest(null);
  };

  const handleRoomChange = (stu_id, new_room_no, new_seat_no, decision) => {
    const response = axios.post('http://localhost:3000/seat_allocation/allocate_room_change', {
      stu_id: stu_id,
      room_no: new_room_no,
      seat_no: new_seat_no,
      decision: decision
    });
    console.log(response.data);
    // setChangeRequests(changeRequests.filter(request => request.stu_id !== selectedRequest.stu_id));
    fetchRooms();
    fetchRoomChangeApplicants();
    setChangeModalVisible(false);
    setSelectedRequest(null);
  };

  return (

    <div className="SeatAllocation">

      <Navbar />
      <div className="room-list-container">
        <div className="room-list">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <div class="flex items-center justify-center mb-4">
                <h3 class="text-2xl font-bold">Room {room.room_no}</h3>
              </div>
              <div className="seat-container">
                {room.seats.map((seat, seatIndex) => (
                  <div
                    key={seatIndex}
                    className="seat"
                    onDragOver={(e) => e.preventDefault()} // Allow dropping onto the seat
                    onDrop={() => handleDrop(room.room_no, seatIndex)} // Handle drop event
                    style={{ textAlign: 'center', alignItems: 'center' }}
                  >
                    {seat.name ? (
                      <div class="text-sm">
                        <img src={img} alt={seat.name} style={{ width: '70px', height: '70px', borderRadius: '50%', marginLeft: '90px' }} />
                        <p>{seat.name}</p>
                        <p>ID: {seat.stu_id}</p>
                        <p>Department: {seat.dept}</p>
                        <p>Level: {seat.level_term}</p>
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
        { changeListVisible: false, cancelListVisible: false },

        <div className="applicant-list-container">
          <div class="flex items-center justify-center">
            <h2 class="text-3xl font-bold" style={{ marginLeft: '110px', marginTop: '20px', marginBottom: '20px' }}>Applicants</h2>
          </div>
          <div className="applicant-list">
            {applicants.map((applicant) => (
              <div class="flex applicant">
                <div
                  key={applicant.stu_id}
                  draggable
                  className="flex-grow justify-start"
                  onDragStart={() => setDraggedApplicant(applicant)}
                  onDragEnd={() => setDraggedApplicant(null)}
                // style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'left', flex: '1'}}
                >
                  <p class="text-lg">{applicant.name}</p>
                  <div class="text-xs">
                    <span>ID: {applicant.stu_id}</span><br />
                    <span>Department: {applicant.dept}</span><br />
                    <span>Home District: {applicant.home_district}</span><br />
                    <span>School: {applicant.school}</span><br />
                    <span>College: {applicant.college}</span>
                  </div>
                </div>
                <div class="flex-1 align-middle justify-end">
                  <img src={img} alt={applicant.name} style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {cancelListVisible && !applicantListVisible && !changeListVisible && (

        { applicantListVisible: false, changeListVisible: false },
        <div className="cancellation-requests-list-container">
          <div className="cancellation-requests-list">
            <h2 class="text-3xl font-bold" style={{ marginLeft: '80px', marginTop: '20px', marginBottom: '20px' }}>Applicants</h2>
            {cancellationRequests.map((request) => (
              <div
                key={request.stu_id}
                className="cancellation-request"
                onClick={() => handleRequestClick(request)}
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}
              >
                <img src={img} alt={request.name} style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                <p>{request.name}</p>
                <p>ID: {request.stu_id}</p>
                <p>Department: {request.dept}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {changeListVisible && !applicantListVisible && !cancelListVisible && (

        { applicantListVisible: false, cancelListVisible: false },
        <div className="change-requests-list-container">
          <div className="change-requests-list">
            <h2 class="text-3xl font-bold" style={{ marginLeft: '90px', marginTop: '20px', marginBottom: '20px' }}>Applicants</h2>
            {changeRequests.map((request) => (
              <div
                key={request.stu_id}
                className="change-request"
                onClick={() => handleChangeRequest(request)}
                style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}
              >
                <img src={img} alt={request.name} style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                <p>{request.name}</p>
                <p>ID: {request.stu_id}</p>
                <p>Department: {request.dept}</p>
              </div>
            ))}
          </div>
        </div>
      )}


      <div className="seat-alloc-buttons">
        <button onClick={() => { setApplicantListVisible(true); setChangeListVisible(false); setCancelListVisible(false); }}>Show Applicants</button>
        <button onClick={() => { setChangeListVisible(true); setApplicantListVisible(false); setCancelListVisible(false); }}>Show Change Requests</button>
        <button onClick={() => { setCancelListVisible(true); setApplicantListVisible(false); setChangeListVisible(false); }}>Show Cancellation Requests</button>
      </div>

      {changeModalVisible && selectedRequest && (
        <Modal
          isOpen={changeModalVisible}
          onRequestClose={() => setModalVisible(false)}
          className="Modal"
          overlayClassName="Overlay"
        >
          <img src={img} alt={selectedRequest.name} />
          <p>{selectedRequest.name}</p>
          <p>ID: {selectedRequest.stu_id}</p>
          <p>Department: {selectedRequest.dept}</p>
          <p>Reason: {selectedRequest.reason}</p>
          <p>New room: {selectedRequest.new_room_no}, New seat: {selectedRequest.new_seat_no}</p>

          {/* this input field will take a room no which is in the preffered list given by the applicant &
        the applicant will be alloted into that room */}
          <input type="text" placeholder="Enter Allotted Room No" />
          <div className="modal-buttons">
            <button onClick={() => handleRoomChange(selectedRequest.stu_id, selectedRequest.new_room_no, selectedRequest.new_seat_no, 'accept')} style={{ backgroundColor: "green" }}>Accept</button>
            <button onClick={() => handleRoomChange(selectedRequest.stu_id, selectedRequest.new_room_no, selectedRequest.new_seat_no, 'reject')} style={{ backgroundColor: "red" }}>Reject</button>
            <button onClick={() => {
              setCancelModalVisible(false); setSelectedRequest(null);
            }}>Back</button>
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
          <img src={img} alt={selectedRequest.name} />
          <p>{selectedRequest.name}</p>
          <p>ID: {selectedRequest.stu_id}</p>
          <p>Department: {selectedRequest.dept}</p>
          <p>Reason: {selectedRequest.reason}</p>
          <div className="modal-buttons">
            <button onClick={() => handleRoomCancel(selectedRequest.stu_id, 'accept')} style={{ backgroundColor: "green" }}>Accept</button>
            <button onClick={() => handleRoomCancel(selectedRequest.stu_id, 'reject')} style={{ backgroundColor: "red" }}>Reject</button>
            <button onClick={() => {
              setCancelModalVisible(false); setSelectedRequest(null);
            }}>Back</button>
          </div>
        </Modal>
      )}

    </div>
  );
}

export default SeatAllocation;
