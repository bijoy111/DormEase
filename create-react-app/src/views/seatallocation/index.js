import React, { useState } from 'react';
import './style.css'; // You can define your CSS styles in App.css

import Modal from 'react-modal';

function StudentPage() {
  // Dummy data for dormitory rooms and applicants
  //const [rooms, setRooms] = useState([
  const [rooms] = useState([
    {
      id: 1,
      seats: [
        { name: 'John Doe', id: '101', department: 'CSE', image: 'url_to_image',level_term: '1-1' },
        { name: '', id: '', department: '', image: '',level_term: '1-2' },
        { name: '', id: '', department: '', image: '',level_term: '1-2' },
        { name: 'Jane Smith', id: '102', department: 'EEE', image: 'url_to_image',level_term: '1-1' },
      ],
    },
    {
      id: 2,
      seats: [
        { name: 'Jane Smith', id: '102', department: 'Civil', image: 'url_to_image',level_term: '1-1' },
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: '', id: '', department: '', image: '' ,level_term:''}
      ],
    },
    {
      id: 3,
      seats: [
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: 'Jane Smith', id: '102', department: 'CSE', image: 'url_to_image' ,level_term:'4-1' },
        { name: '', id: '', department: '', image: '' ,level_term:''},
      ],
    },
    {
      id: 4,
      seats: [
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: '', id: '', department: '', image: '' ,level_term:''},
        { name: 'Jane Smith', id: '102', department: 'EEE', image: 'url_to_image',level_term: '3-1' },
        { name: '', id: '', department: '', image: '' ,level_term:''},
      ],
    },
    // Add more rooms as needed
  ]);

//   const handleDrop = (roomId, seatIndex, applicant) => {
//     const updatedRooms = [...rooms];
//     updatedRooms[roomId].seats[seatIndex] = applicant;
//     setRooms(updatedRooms);
// };

 // State to manage modal visibility
 const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
 const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
 const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
 const [roomPreference, setRoomPreference] = useState('');
 const [cgpa, setCGPA] = useState('');
 const [currentLivingPlace, setCurrentLivingPlace] = useState('');
 const [reason, setReason] = useState('');

 // Function to open the modal
//  const openApplyModal = () => {
//    setIsApplyModalOpen(true);
//    setIsChangeModalOpen(false);
//    setIsCancelModalOpen(false);
//  };

 // Function to close the modal
 const closeApplyModal = () => {
   setIsApplyModalOpen(false);
 };
 // Function to open the modal
 const openChangeModal = () => {
   setIsChangeModalOpen(true);
   setIsApplyModalOpen(false);
   setIsCancelModalOpen(false);
 };

 // Function to close the modal
 const closeChangeModal = () => {
   setIsChangeModalOpen(false);
 };

 // Function to open the modal
 const openCancelModal = () => {
   setIsCancelModalOpen(true);
   setIsChangeModalOpen(false);
   setIsApplyModalOpen(false);
 };

 // Function to close the modal
 const closeCancelModal = () => {
   setIsCancelModalOpen(false);
 };

 // Function to handle form submission
 const handleApplySeat = (e) => {
   e.preventDefault();
   // Perform submission logic here
   console.log('Room Preference:', roomPreference);
   console.log('CGPA:', cgpa);
   console.log('Current Living Place:', currentLivingPlace);

   //reset form fields
    setRoomPreference('');
    setCGPA('');
    setCurrentLivingPlace('');
   // Close modal
   closeApplyModal();
 };

 // Function to handle form submission
 const handleChangeSeat = (e) => {
   e.preventDefault();
   // Perform submission logic here
   console.log('Room Preference:', roomPreference);
   console.log('CGPA:', cgpa);
   console.log('Why do you want to change room? ', currentLivingPlace);

   //reset form fields
    setRoomPreference('');
    setCGPA('');
    setReason('');
   // Close modal
   closeChangeModal();
 };
 // Function to handle form submission
 const handleCancelSeat = (e) => {
   e.preventDefault();
   // Perform submission logic here
   console.log('Room Preference:', roomPreference);
   console.log('CGPA:', cgpa);
   console.log('Why do you want to cancel room? ', currentLivingPlace);

    //reset form fields
    setRoomPreference('');
    setCGPA('');
    setReason('');
   // Close modal
   closeCancelModal();
 };


  return (
    <div className="StudentPage">
      <div className="room-list">
        {/* {rooms.map((room, index) => ( */}
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>Room {room.id}</h3>
            <div className="seat-container">
              {room.seats.map((seat, seatIndex) => (
                <div key={seatIndex} className="seat">
                  {seat.name ? (
                    <div>
                      <img src={seat.image} alt={seat.name} />
                      {/* <p>{seat.name}</p> */}
                      <p>ID: {seat.id}</p>
                      <p>Department: {seat.department}</p>
                      <p>Level-Term: {seat.level_term}</p>
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


      <div className="student-actions">
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        {/* <button1 onClick={openApplyModal}>Apply for a Seat</button1> */}
        <button1 onClick={openChangeModal}>Apply to Change Room</button1>
        <button1 onClick={openCancelModal}>Cancel Your Seat</button1>
      </div>
      

      <Modal
        isOpen={isApplyModalOpen}
        onRequestClose={closeApplyModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Apply for a Seat</h2>
        <form onSubmit={handleApplySeat}>
          <div>
            <label htmlFor="roomPreference">Enter your preferred rooms:</label>
            <input
              type="text"
              id="roomPreference"
              value={roomPreference}
              onChange={(e) => setRoomPreference(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cgpa">Your CGPA:</label>
            <input
              type="text"
              id="cgpa"
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="currentLivingPlace">Your Current Living Place:</label>
            <input
              type="text"
              id="currentLivingPlace"
              value={currentLivingPlace}
              onChange={(e) => setCurrentLivingPlace(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeApplyModal}>Cancel</button>
        </form>
      </Modal>

      {/* Change modal */}
      <Modal
        isOpen={isChangeModalOpen}
        onRequestClose={closeChangeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Apply for a Seat</h2>
        <form onSubmit={handleChangeSeat}>
          <div>
            <label htmlFor="roomPreference">Enter your preferred rooms:</label>
            <input
              type="text"
              id="roomPreference"
              value={roomPreference}
              onChange={(e) => setRoomPreference(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cgpa">Your CGPA:</label>
            <input
              type="text"
              id="cgpa"
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="reason">Why do you want to change room?</label>
            <textarea
              rows={3}
              cols={46}
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeChangeModal}>Cancel</button>
        </form>
      </Modal>

      {/* Cancel modal */}
      <Modal
        isOpen={isCancelModalOpen}
        onRequestClose={closeCancelModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Seat Cancelation Form</h2>
        <form onSubmit={handleCancelSeat}>

          <div>
            <label htmlFor="reason">Why do you want to cancel your seat?</label>
            <textarea
              rows={5}
              cols={46}
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeCancelModal}>Cancel</button>
        </form>
      </Modal>

    </div>
  );
}

export default StudentPage;
