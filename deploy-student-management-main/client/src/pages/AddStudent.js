import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  console.log('AddStudent component rendering');
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    enrollmentYear: '',
    rollNumber: '',
    dob: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log('AddStudent component mounted');
    return () => {
      console.log('AddStudent component unmounted');
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form:', form);
      await axios.post('/api/students', form);
      alert('Student added successfully!');
      navigate('/students');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4 text-center">Add New Student</h3>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter full name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email address"
            onChange={handleChange}
            required
          />
        </div>

        {/* Course */}
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            name="course"
            className="form-control"
            placeholder="Enter course name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Enrollment Year */}
        <div className="mb-3">
          <label className="form-label">Enrollment Year</label>
          <input
            type="number"
            name="enrollmentYear"
            className="form-control"
            placeholder="Enter enrollment year (e.g., 2022)"
            onChange={handleChange}
            required
          />
        </div>

        {/* Roll Number */}
        <div className="mb-3">
          <label className="form-label">Student ID (Roll Number)</label>
          <input
            type="text"
            name="rollNumber"
            className="form-control"
            placeholder="Enter roll number"
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            onChange={handleChange}
            required
          />
          <small className="text-muted">Format: DD-MM-YYYY</small>
        </div>

        {/* Submit */}
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
