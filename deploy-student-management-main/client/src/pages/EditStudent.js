import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    enrollmentYear: '',
    rollNumber: '',
    dob: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();  // Grab id from URL params

  useEffect(() => {
    // Fetch student data using the ID from the URL
    axios
      .get(`/api/students/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error('Error fetching student:', err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${id}`, form);  // Update student by ID
      alert('Student updated successfully!');
      navigate('/students');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4 text-center">Edit Student</h3>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
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
            value={form.email}
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
            value={form.course}
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
            value={form.enrollmentYear}
            onChange={handleChange}
            placeholder="Enter enrollment year (e.g., 2022)"
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
            value={form.rollNumber}
            onChange={handleChange}
            placeholder="Enter roll number"
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
            value={form.dob ? form.dob.substring(0, 10) : ''}  // Correctly format date
            onChange={handleChange}
            required
          />
          <small className="text-muted">Format: DD-MM-YYYY</small>
        </div>

        {/* Submit */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
