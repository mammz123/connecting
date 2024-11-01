import React from 'react';
import '../styles.css'; // Import the CSS file


const testimonialsData = [
    {
        name: "John Doe",
        title: "CEO of Company XYZ",
        image: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
        text: "This service is outstanding! We’ve seen remarkable results after working with this team.",
    },
    {
        name: "Jane Smith",
        title: "Marketing Director at ABC Corp",
        image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        text: "Professional and reliable, I highly recommend them!",
    },
    {
        name: "Samuel Green",
        title: "Freelance Designer",
        image: "https://t3.ftcdn.net/jpg/04/77/87/44/360_F_477874414_kSQ9ip26804g8B3ItYsh5XsjNRgqf693.jpg",
        text: "They delivered exactly what I was looking for, exceeding all my expectations.",
    },
    {
        name: "Mukesh Rawoother",
        title: "Freelance Designer",
        image: "https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
        text: "They delivered exactly what I was looking for, exceeding all my expectations.",
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-slider">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <img src={testimonial.image} alt={`${testimonial.name}'s photo`} />
                        <h3>{testimonial.name}</h3>
                        <p className="title">{testimonial.title}</p>
                        <p className="text">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;