import { Button } from "@material-tailwind/react";
import CardContent from '@mui/material/CardContent';
import logo from 'assets/images/common_user10.png';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import './style.css';

const options = [
  { value: 1, label: 'hazar block' },
  { value: 2, label: 'hundred block' },
  { value: 3, label: 'first floor' },
  { value: 4, label: 'second floor' },
  { value: 5, label: 'third floor' },
  { value: 6, label: 'fourth floor' },
  { value: 7, label: 'fifth floor' },
];

const options2 = [
  { value: 1, label: '2001' },
  { value: 2, label: '2002' },
  { value: 3, label: '2003' },
  { value: 4, label: '2004' },
];

function StudentPage() {

  // State to manage modal visibility
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [roomPreference, setRoomPreference] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [currentLivingPlace, setCurrentLivingPlace] = useState('');
  const [reason, setReason] = useState('');

  // Function to open the apply modal
  const openApplyModal = () => {
    setIsApplyModalOpen(true);
    setIsChangeModalOpen(false);
    setIsCancelModalOpen(false);
  };

  // Function to close the apply modal
  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
  };
  // Function to open the change modal
  const openChangeModal = () => {
    setIsChangeModalOpen(true);
    setIsApplyModalOpen(false);
    setIsCancelModalOpen(false);
  };

  // Function to close the change modal
  const closeChangeModal = () => {
    setIsChangeModalOpen(false);
  };

  //Function to open the cancel modal
  const openCancelModal = () => {
    setIsCancelModalOpen(true);
    setIsChangeModalOpen(false);
    setIsApplyModalOpen(false);
  };

  // Function to close the cancel modal
  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  // Function to handle apply form submission
  const handleApplySeat = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Room Preference:', roomPreference);
    console.log('CGPA:', cgpa);
    console.log('Current Living Place:', currentLivingPlace);
    //reset form fields
    setRoomPreference('');
    setCGPA('');
    setReason('');
    // Close modal
    closeApplyModal();
  };

  // Function to handle change form submission
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

  // Function to handle cancel form submission
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

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  const handleChange2 = (selectedOption) => {
    setSelectedOptions2(selectedOption);
  };

  // State for storing card data
  const [cardData, setCardData] = useState([]);
  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
    console.log('hello');
    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/allocation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      // Update the state with the fetched data
      setCardData(data);
      // console.log(cardData)
      // console.log(cardData[0].room_no);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []); // Empty dependency array ensures it only runs once on mount

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < cardData.length; i++) {
      const room_no = cardData[i].room_no;
      const seat_no = cardData[i].seat_no;
      const name = cardData[i].name;
      const id = cardData[i].stu_id;
      const dept = cardData[i].dept;
      const lt = cardData[i].level_term;
      // Check if the room_no exists in tmp, if not, initialize it as an empty array
      if (!tmp[room_no]) {
        tmp[room_no] = [];
      }
      // Store student information in tmp
      tmp[room_no][seat_no] = { name, id, dept, lt };
    }

    const updatedRooms = [];
    for (let room_no = 0; room_no < tmp.length; room_no++) {
      const seats = [];
      const room = tmp[room_no];
      if (room) {
        console.log(`Room No: ${room_no}`);
        for (let seat_no = 1; seat_no <= 4; seat_no++) {
          const student = room[seat_no];
          if (student) {
            console.log(`  Seat No: ${seat_no}`);
            console.log(`    Name: ${student.name}`);
            console.log(`    ID: ${student.id}`);
            console.log(`    Department: ${student.dept}`);
            console.log(`    Level/Term: ${student.lt}`);
            seats.push({
              name: student.name,
              id: student.id,
              department: student.dept,
              image: logo,
              level_term: student.lt
            });
          } else {
            console.log(`  Seat No: ${seat_no} is empty`);
            seats.push({
              name: '',
              id: '',
              department: '',
              image: '',
              level_term: ''
            });
          }
        }
        updatedRooms.push({
          id: room_no,
          seats: seats
        });
      }
    }
    setRooms(updatedRooms);
  }, [cardData]);


  const resident = false;
  const attached = !resident;

  return (
    <div className="StudentPage">
      <div className="room-list">
        <div className="select-container">
          <Select
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            isMulti={true}
          />
          <Button
            variant="outlined"
            type="button"
            id="filter"
            name="filter"
            className="btn btn-secondary mr-3"
            style={{
              marginTop: '10px',
              marginBottom: '15px',
              marginLeft: '0px',
              fontSize: '1rem',
              fontFamily: 'Arial, sans-serif',
              borderRadius: '10px',
              height: '35px',
              width: '70px',
              boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out',
              color: 'white',
              backgroundColor: '#673AB7',
            }}
            onClick={() => handleSubmit()}
            onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
            onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
          >
            Filter
          </Button>
        </div>

        <br />
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

      <div className="cardd" style={{ marginTop: '200px', marginLeft: '700px', }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>

        </CardContent>
      </div>

      {attached && (
        <>
          <div style={{ position: 'fixed' }}>
            <Button
              variant="outlined"
              type="button"
              id="change-room"
              name="change-room"
              className="btn btn-secondary mr-3"
              style={{
                marginTop: '310px',
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
              onClick={openApplyModal}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
            >
              Apply for seat
            </Button>
          </div>
        </>
      )}

      {/* apply modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onRequestClose={closeApplyModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {/* <h1>Apply for a Seat</h1> */}
        <br />
        <form onSubmit={handleApplySeat}>
          <div>
            <label htmlFor="roomPreference" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Enter your preferred rooms:</label>
            <div className="select-container">
              <Select
                options={options2}
                value={selectedOptions2}
                onChange={handleChange2}
                isMulti={true}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                    border: '1px solid #4CAF50',
                  }),
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="cgpa" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Your CGPA:</label>
            <input
              type="text"
              className="form-control custom-input"
              style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
              id="cgpa"
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="reason" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Why do you want room?</label>
            <textarea
              className="form-control custom-input"
              style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', width: '100%', minHeight: '80px', backgroundColor: 'transparent' }}
              rows={3}
              cols={46}
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-center mr-8">
                <Button
                  variant="outlined"
                  type="button"
                  id="cancel"
                  name="cancel"
                  className="btn btn-secondary mr-3"
                  style={{
                    marginTop: '20px',
                    fontSize: '1.1rem',
                    fontFamily: 'Arial, sans-serif',
                    borderRadius: '15px',
                    height: '50px',
                    width: '100px',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    color: 'white',
                    backgroundColor: '#673AB7',
                  }}
                  onClick={() => closeApplyModal()}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  Cancel
                </Button>

                <Button
                  variant="outlined"
                  type="button"
                  id="cancel"
                  name="cancel"
                  className="btn btn-secondary mr-3"
                  style={{
                    marginTop: '20px',
                    marginLeft: '15px',
                    fontSize: '1.1rem',
                    fontFamily: 'Arial, sans-serif',
                    borderRadius: '15px',
                    height: '50px',
                    width: '100px',
                    boxShadow: '0px 4px 8px rgba(2, 48, 32, 0.5)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                    color: 'white',
                    backgroundColor: '#673AB7',
                  }}
                  onClick={() => handleSubmit()}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
                  onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>


      {resident && (
        <>
          <div style={{ position: 'fixed' }}>
            <Button
              variant="outlined"
              type="button"
              id="change-room"
              name="change-room"
              className="btn btn-secondary mr-3"
              style={{
                marginTop: '370px',
                marginLeft: '760px',
                marginBottom: '40px',
                fontSize: '1.1rem',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '35px',
                height: '70px',
                width: '180px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
                color: 'white',
                backgroundColor: '#673AB7',
              }}
              onClick={openChangeModal}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
            >
              Change Room
            </Button>
          </div>
        </>
      )}

      {resident && (
        <>
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
                marginLeft: '760px',
                fontSize: '1.1rem',
                fontFamily: 'Arial, sans-serif',
                borderRadius: '35px',
                height: '70px',
                width: '180px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
                color: 'white',
                backgroundColor: '#673AB7',
              }}
              onClick={openCancelModal}
              onMouseEnter={(e) => { e.target.style.backgroundColor = ''; e.target.style.color = 'black'; }} // Change to desired color
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#673AB7'; e.target.style.color = 'white'; }} // Change back to default color
            >
              Cancel Room
            </Button>
          </div>
        </>
      )}


      {/* change modal */}
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
            <label htmlFor="currentLivingPlace">Your Current Living Place:</label>
            <input
              type="text"
              id="currentLivingPlace"
              value={currentLivingPlace}
              onChange={(e) => setCurrentLivingPlace(e.target.value)}
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
