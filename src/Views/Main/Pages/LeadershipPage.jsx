import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Leadership = () => {
    const teamMembers = [
        {
            name: "John Doe",
            role: "CEO",
            image: "path_to_image_1.jpg",
            responsibility: "Oversees the company's overall operations."
        },
        {
            name: "Jane Smith",
            role: "CTO",
            image: "path_to_image_2.jpg",
            responsibility: "Leads the technology and product development."
        },
        {
            name: "Mike Johnson",
            role: "COO",
            image: "path_to_image_3.jpg",
            responsibility: "Handles the company's day-to-day operations."
        },
        // Add more members as needed
    ];

    return (
        <div className="container mt-5">
            <div className="text-center  mb-5">
                <h2 className="display-4 text-dary fw-bold">Our Leadership Team</h2>
                <p className="lead text-muted">Meet the dedicated professionals leading our company to success.</p>
            </div>

            <div className="row">
                {teamMembers.map((member, index) => (
                    <div className="col-md-4 mb-4 px-3" key={index}>
                        <div className="card shadow-sm border-light rounded">
                            <img src={member.image} className="card-img-top" alt={member.name} style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title font-weight-bold">{member.name}</h5>
                                <h6 className="card-subtitle mb-3 text-muted">{member.role}</h6>
                                <p className="card-text text-secondary">{member.responsibility}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
