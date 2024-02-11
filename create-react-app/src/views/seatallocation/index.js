import { Button } from "@material-tailwind/react";
import CardContent from '@mui/material/CardContent';
import logo from 'assets/images/common_user10.png';
import { useState } from 'react';
import Modal from 'react-modal';
import './style.css';

function StudentPage() {
  // Dummy data for dormitory rooms and applicants
  const [rooms] = useState([
    {
      id: 2001,
      seats: [
        { name: 'Bijoy Ahmed Saiem', id: '1905052', department: 'CSE', image: logo, level_term: '4-1' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: 'Al-Amin Sany', id: '1905048', department: 'CSE', image: logo, level_term: '4-1' },
      ],
    },
    {
      id: 2002,
      seats: [
        { name: 'Rakib Ahsan', id: '1905024', department: 'CSE', image: logo, level_term: '4-1' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: '', id: '', department: '', image: '', level_term: '' }
      ],
    },
    {
      id: 2003,
      seats: [
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: 'Tanvir Alam', id: '1904049', department: 'IPE', image: logo, level_term: '4-1' },
        { name: '', id: '', department: '', image: '', level_term: '' },
      ],
    },
    {
      id: 2004,
      seats: [
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: '', id: '', department: '', image: '', level_term: '' },
        { name: 'Sourov Rahman', id: '1906034', department: 'WRE', image: logo, level_term: '4-1' },
        { name: '', id: '', department: '', image: '', level_term: '' },
      ],
    },
    // we can add more rooms as needed
  ]);

  // State to manage modal visibility
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [roomPreference, setRoomPreference] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [currentLivingPlace, setCurrentLivingPlace] = useState('');
  const [reason, setReason] = useState('');

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
        {rooms.map((room) => (
          <div key={room.id} className="room-card" style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '0 auto', marginBottom: '15px', fontSize: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#673AB7' }}>Room: {room.id}</h3>
            <div className="seat-container">
              {room.seats.map((seat, seatIndex) => (
                <div key={seatIndex} className="seat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                  {seat.name ? (
                    <div style={{ textAlign: 'center' }}>
                      <img src={seat.image} alt={seat.name} style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>{seat.name}</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>{seat.id}</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}> {seat.department}</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', margin: '5px 0' }}>L/T: {seat.level_term}</p>
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

      <div className="card" style={{ marginTop: '200px', marginLeft: '700px', }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>

        </CardContent>
      </div>


      <div style={{ position: 'fixed' }}>
        <Button
          variant="outlined"
          type="button"
          id="change-room"
          name="change-room"
          className="btn btn-secondary mr-3"
          style={{
            marginTop: '370px',
            marginLeft: '740px',
            marginBottom: '40px',
            fontSize: '1.1rem',
            fontFamily: 'Arial, sans-serif',
            borderRadius: '15px',
            height: '70px',
            width: '220px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            color: 'white',
            backgroundColor: '#673AB7',
          }}
          onClick={openChangeModal}
          onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
        >
          Apply to Change Room
        </Button>
      </div>

      <div style={{
        position: 'fixed',
      }}>
        <Button
          variant="outlined"
          type="button"
          id="cancel-seat"
          name="cancel-seat"
          className="btn btn-secondary mr-3"
          style={{
            marginTop: '270px',
            marginLeft: '740px',
            fontSize: '1.1rem',
            fontFamily: 'Arial, sans-serif',
            borderRadius: '15px',
            height: '70px',
            width: '220px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            color: 'white',
            backgroundColor: '#673AB7',
          }}
          onClick={openCancelModal}
          onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
          onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
        >
          Cancel Your Seat
        </Button>
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
