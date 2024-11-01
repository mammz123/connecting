import React, { useState } from 'react';
import axios from 'axios';

const JobPosting = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/jobs', { title, description, company, location });
      alert('Job posted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to post job.');
    }
  };

  return (
    <div>
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPosting;