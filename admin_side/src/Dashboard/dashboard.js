import React, { useEffect, useState } from "react";
import { Navbar } from '../Navbar/Navbar';
export function Dashboard() {
  const [students, setStudents] = useState([]); // State to store fetched notices

  // Function to fetch notices from backend
  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3000/get_students');
      const data = await response.json();
      console.log(data);
      // Update the state with the fetched data
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents(); // Fetch notices when component mounts
  }, []);

  const handleAccept = async (studentId, index) => {
    try {
      const response = await fetch('http://localhost:3000/approve_manager', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stu_id: studentId })
      });
      if (response.ok) {
        // Handle success
        console.log('Student mess manager approval sent successfully');
        const updatedStudents = [...students];
        updatedStudents[index].approvalSent = true;
        setStudents(updatedStudents);
        window.open('/dashboard', '_self');
      } else {
        // Handle error
        console.error('Failed to send student mess manager approval');
      }
    } catch (error) {
      console.error('Error sending student mess manager approval:', error);
    }
  };

  const handleReject = async (studentId) => {
    try {
      const response = await fetch('http://localhost:3000/delete_manager', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stu_id: studentId })
      });
      if (response.ok) {
        // Handle success
        console.log("Rejected student ID:", studentId);
        window.open('/dashboard', '_self');
      } else {
        // Handle error
        console.error('Failed to send student mess manager approval');
      }
    } catch (error) {
      console.error('Error sending student mess manager approval:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex' }}>
      <Navbar />
      <div className="students-list" style={{ marginLeft: '15px', marginRight: '15px', marginTop: '50px' }}>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Dept</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>L/T</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Phone</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>CGPA</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Resident</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Guardian name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Guardian phone</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Mess Manager</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Applied for Mess Manager</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.stu_id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.dept}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.level_term}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.phone}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.cgpa}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{String(student.resident)}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.guardian_name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{student.guardian_phone}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{String(student.mess_manager)}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{String(student.mess_manager_applied)}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {student.approvalSent ? (
                    "Accepted"
                  ) : (
                    <>
                      {student.mess_manager ? (
                        <button style={{ backgroundColor: 'red', color: 'white', marginBottom: '5px', padding: '5px', width: '80px' }} onClick={() => handleReject(student.stu_id, index)}>Cancel</button>
                      )
                        : (

                          student.mess_manager_applied ? (
                            <button style={{ backgroundColor: 'green', color: 'white', marginBottom: '5px', padding: '5px', width: '80px' }} onClick={() => handleAccept(student.stu_id, index)}>Accept</button>
                          ) : (
                            <button style={{ backgroundColor: 'purple', color: 'white', marginBottom: '5px', padding: '5px', width: '80px' }} onClick={() => handleAccept(student.stu_id, index)}>Make Manager</button>
                          )

                        )
                      }
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
}