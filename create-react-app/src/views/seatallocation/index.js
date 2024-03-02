import { Button } from "@material-tailwind/react";
import CardContent from '@mui/material/CardContent';
import logo from 'assets/images/common_user10.png';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import './style.css';

const options = [];

const options2 = [
  { value: 1, label: '01' },
  { value: 2, label: '02' },
  { value: 3, label: '03' },
  { value: 4, label: '04' },
];

const options3 = [
  { value: 'Bagerhat', label: 'Bagerhat' },
  { value: 'Bandarban', label: 'Bandarban' },
  { value: 'Barguna', label: 'Barguna' },
  { value: 'Barishal', label: 'Barishal' },
  { value: 'Bhola', label: 'Bhola' },
  { value: 'Bogra', label: 'Bogra' },
  { value: 'Brahmanbaria', label: 'Brahmanbaria' },
  { value: 'Chandpur', label: 'Chandpur' },
  { value: 'Chapai Nawabganj', label: 'Chapai Nawabganj' },
  { value: 'Chattogram', label: 'Chattogram' },
  { value: 'Chuadanga', label: 'Chuadanga' },
  { value: 'Cox\'s Bazar', label: 'Cox\'s Bazar' },
  { value: 'Cumilla', label: 'Cumilla' },
  { value: 'Dhaka', label: 'Dhaka' },
  { value: 'Dinajpur', label: 'Dinajpur' },
  { value: 'Faridpur', label: 'Faridpur' },
  { value: 'Feni', label: 'Feni' },
  { value: 'Gaibandha', label: 'Gaibandha' },
  { value: 'Gazipur', label: 'Gazipur' },
  { value: 'Gopalganj', label: 'Gopalganj' },
  { value: 'Habiganj', label: 'Habiganj' },
  { value: 'Jamalpur', label: 'Jamalpur' },
  { value: 'Jashore', label: 'Jashore' },
  { value: 'Jhalokati', label: 'Jhalokati' },
  { value: 'Jhenaidah', label: 'Jhenaidah' },
  { value: 'Joypurhat', label: 'Joypurhat' },
  { value: 'Khagrachhari', label: 'Khagrachhari' },
  { value: 'Khulna', label: 'Khulna' },
  { value: 'Kishoreganj', label: 'Kishoreganj' },
  { value: 'Kurigram', label: 'Kurigram' },
  { value: 'Kushtia', label: 'Kushtia' },
  { value: 'Lakshmipur', label: 'Lakshmipur' },
  { value: 'Lalmonirhat', label: 'Lalmonirhat' },
  { value: 'Madaripur', label: 'Madaripur' },
  { value: 'Magura', label: 'Magura' },
  { value: 'Manikganj', label: 'Manikganj' },
  { value: 'Meherpur', label: 'Meherpur' },
  { value: 'Moulvibazar', label: 'Moulvibazar' },
  { value: 'Munshiganj', label: 'Munshiganj' },
  { value: 'Mymensingh', label: 'Mymensingh' },
  { value: 'Naogaon', label: 'Naogaon' },
  { value: 'Narail', label: 'Narail' },
  { value: 'Narayanganj', label: 'Narayanganj' },
  { value: 'Narsingdi', label: 'Narsingdi' },
  { value: 'Natore', label: 'Natore' },
  { value: 'Nawabganj', label: 'Nawabganj' },
  { value: 'Netrokona', label: 'Netrokona' },
  { value: 'Nilphamari', label: 'Nilphamari' },
  { value: 'Noakhali', label: 'Noakhali' },
  { value: 'Pabna', label: 'Pabna' },
  { value: 'Panchagarh', label: 'Panchagarh' },
  { value: 'Patuakhali', label: 'Patuakhali' },
  { value: 'Pirojpur', label: 'Pirojpur' },
  { value: 'Rajbari', label: 'Rajbari' },
  { value: 'Rajshahi', label: 'Rajshahi' },
  { value: 'Rangamati', label: 'Rangamati' },
  { value: 'Rangpur', label: 'Rangpur' },
  { value: 'Satkhira', label: 'Satkhira' },
  { value: 'Shariatpur', label: 'Shariatpur' },
  { value: 'Sherpur', label: 'Sherpur' },
  { value: 'Sirajganj', label: 'Sirajganj' },
  { value: 'Sunamganj', label: 'Sunamganj' },
  { value: 'Sylhet', label: 'Sylhet' },
  { value: 'Tangail', label: 'Tangail' },
  { value: 'Thakurgaon', label: 'Thakurgaon' }
];

function StudentPage() {

  // State to manage modal visibility
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [school, setSchool] = useState('');
  const [college, setCollege] = useState('');
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
    //reset form fields
    setRoomPreference('');
    setSeatPreference('');
    setDistrict('');
    setSchool('');
    setCollege('');
    // Close modal
    closeApplyModal();
  };

  // Function to handle change form submission
  const handleChangeSeat = (e) => {
    e.preventDefault();
    //reset form fields
    setRoomPreference('');
    setSeatPreference('');
    setReason('');
    // Close modal
    closeChangeModal();
  };

  // Function to handle cancel form submission
  const handleCancelSeat = (e) => {
    e.preventDefault();
    //reset form fields
    setReason('');
    // Close modal
    closeCancelModal();
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };
  const handleChange2 = (selectedOption) => {
    setSelectedOptions2(selectedOption);
  };
  const handleChange3 = (selectedOption) => {
    setSelectedOptions3(selectedOption);
  };

  const [cardData0, setCardData0] = useState([]);
  // State for storing card data
  const [cardData, setCardData] = useState([]);
  // Function to fetch card data from the database
  const fetchCardDataFromDatabase = async () => {
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
      setCardData0(data);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase();
  }, []); // Empty dependency array ensures it only runs once on mount


  // State for storing card data
  const [cardData1, setCardData1] = useState([]);
  // Function to fetch card data from the database
  const fetchCardDataFromDatabase1 = async () => {
    try {
      // Fetch data from the database API
      const response = await fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });
      const data = await response.json();
      // Update the state with the fetched data
      setCardData1(data);
      // console.log(cardData)
      // console.log(cardData[0].room_no);
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCardDataFromDatabase1();
  }, []); // Empty dependency array ensures it only runs once on mount

  const resident = cardData1.resident;
  const attached = !resident;

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
        const existingOption = options.find(option => option.value === room_no);
        // If it doesn't exist, push it into the options array
        if (!existingOption) {
          options.push({ value: room_no, label: `${room_no}` });
        }
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


  const handleFilterClick = () => {
    // Filter cardData based on selected options
    const filteredData = cardData0.filter((card) => {
      if (selectedOptions.length === 0) {
        // If no options selected, show all notices
        return true;
      } else {
        // Otherwise, check if the notice matches any selected option
        return selectedOptions.some((option) => {
          if (option.value === card.room_no) {
            return card.room_no;
          }
          return false;
        });
      }
    });
    // Update cardData state with filtered data
    setCardData(filteredData);
  };

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
            onClick={() => handleFilterClick()}
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
        {/* <h2>Seat Application Form</h2> */}
        <form onSubmit={handleApplySeat}>
          <div>
            <label htmlFor="roomPreference" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Room Number</label>
            <div className="select-container">
              <Select
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                isMulti={false}
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
            <label htmlFor="seatPreference" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Seat Number</label>
            <div className="select-container">
              <Select
                options={options2}
                value={selectedOptions2}
                onChange={handleChange2}
                isMulti={false}
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
            <label htmlFor="district" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Home District</label>
            <div className="select-container">
              <Select
                options={options3}
                value={selectedOptions3}
                onChange={handleChange3}
                isMulti={false}
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
            <label htmlFor="school" className="input-label" style={{ color: 'black', fontSize: '20px' }}>School</label>
            <input
              type="text"
              className="form-control custom-input"
              style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="college" className="input-label" style={{ color: 'black', fontSize: '20px' }}>College</label>
            <input
              type="text"
              className="form-control custom-input"
              style={{ color: 'black', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '5px', backgroundColor: 'transparent', border: '1px solid #4CAF50', borderRadius: '8px' }}
              id="cgpa"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
          {/* <div>
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
          </div> */}
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
                  Submit
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
                borderRadius: '25px',
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
                borderRadius: '25px',
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
        <h2>Seat Application Form</h2>
        <form onSubmit={handleChangeSeat}>
          <div>
            <label htmlFor="roomPreference" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Room Number</label>
            <div className="select-container">
              <Select
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                isMulti={false}
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
            <label htmlFor="seatPreference" className="input-label" style={{ color: 'black', fontSize: '20px' }}>Seat Number</label>
            <div className="select-container">
              <Select
                options={options2}
                value={selectedOptions2}
                onChange={handleChange2}
                isMulti={false}
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
            <label htmlFor="reason">Why do you want to cancel your seat?</label>
            <textarea
              rows={5}
              cols={36}
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
                  onClick={() => closeChangeModal()}
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
                  Submit
                </Button>
              </div>
            </div>
          </div>
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
              cols={36}
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
                  onClick={() => closeCancelModal()}
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
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>

    </div>
  );
}

export default StudentPage;
