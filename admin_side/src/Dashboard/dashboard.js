import { Navbar } from '../Navbar/Navbar';

export function Dashboard() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex' }}>
      <Navbar />
      <div className="students-list" style={{ marginLeft: '15px', marginRight: '15px', marginTop: '50px' }}>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {/* Render table header with 14 columns */}
              {/* {[...Array(14)].map((_, index) => (
                <th key={index} style={{ border: '1px solid black', padding: '8px' }}>Column {index + 1}</th>
              ))} */}
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Dept</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>L/T</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Contact</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>CGPA</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Resident</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Guardian name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Guardian phone</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Room</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Seat</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Applied for Room</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Mess Manager</th>
            </tr>
          </thead>
          <tbody>
            {/* You can add table rows and data here if you have specific data to display */}
            {/* For demonstration, I'm adding a single row with dummy data */}
            <tr>
              {/* {[...Array(14)].map((_, index) => (
                <td key={index} style={{ border: '1px solid black', padding: '8px' }}>Data {index + 1}</td>
              ))} */}
              <td style={{ border: '1px solid black', padding: '8px' }}>1905052</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bijoy Ahmed Saiem</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>bijoy@gmail.com</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>CSE</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4-1</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>3.5</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Jamal Uddin</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000001</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2001</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
            </tr>

            <tr>
              {/* {[...Array(14)].map((_, index) => (
                <td key={index} style={{ border: '1px solid black', padding: '8px' }}>Data {index + 1}</td>
              ))} */}
              <td style={{ border: '1px solid black', padding: '8px' }}>1905024</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Rakib Ahsan</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>rakib@gmail.com</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>CSE</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4-1</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>3.5</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Kamal Uddin</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000001</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>512</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
            </tr>

            <tr>
              {/* {[...Array(14)].map((_, index) => (
                <td key={index} style={{ border: '1px solid black', padding: '8px' }}>Data {index + 1}</td>
              ))} */}
              <td style={{ border: '1px solid black', padding: '8px' }}>1905048</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Al-Amin Sany</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>sany@gmail.com</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>CSE</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4-1</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>3.5</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Romel Uddin</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>01700000001</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>505</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  );
}