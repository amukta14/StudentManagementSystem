import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('/api/students');
      console.log('Raw API Response:', res.data);
      // Log the first student's data structure
      if (res.data.length > 0) {
        console.log('First student data structure:', {
          name: res.data[0].name,
          email: res.data[0].email,
          course: res.data[0].course,
          enrollmentYear: res.data[0].enrollmentYear,
          rollNumber: res.data[0].rollNumber,
          dob: res.data[0].dob,
          _id: res.data[0]._id
        });
      }
      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;
    try {
      await axios.delete(`/api/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Enrollment</th>
            <th>Roll Number</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            console.log('Rendering student:', student); // Debug log for each student
            return (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.enrollmentYear}</td>
                <td>{student.rollNumber || '-'}</td>
                <td>{student.dob ? new Date(student.dob).toLocaleDateString() : '-'}</td>
                <td>
                  <Link className="btn btn-primary btn-sm me-2" to={`/edit-student/${student._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(student._id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
