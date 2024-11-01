import React from 'react';
import log from '../vedio/profile.jpg'


// Sample data for team members
const teamData = [
  {
    id: 1,
    name: 'ARUN',
    position: '',
    image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    description: '',
  },
  {
    id: 2,
    name: 'JAYAN',
    position: '',
    image: 'https://img.freepik.com/free-photo/happy-business-man-standing-smiling-against-red-wall_155003-9367.jpg',
    description: '',
  },
 
  {
    id: 4,
    name: 'Muhammed',
    position: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgthpIUmZ9bTrioc0isQmZ6_-D6nIPq6Met4xsy36YZN-4O5I-yaLg7Sjju4HAQIfP4o&usqp=CAU',
    description: '',
  },
];

const Staff = () => {
  return (
    <div className="team-section">
      <h1 className="team-heading">Meet The Team</h1>

      <div className="team-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p className="team-position">{member.position}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
