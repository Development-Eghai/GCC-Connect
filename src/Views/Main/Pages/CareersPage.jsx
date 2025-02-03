import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import Img from '../../../Assets/Images/ImageContainer.png';

const Careers = () => {
    const jobListings = [
        {
            title: "Software Engineer",
            location: "Coimbatore, India",
            type: "Full-Time",
            description: "We are looking for a skilled Software Engineer to develop and maintain web applications.",
            image: Img,
            postedDate: "2024-02-01T10:00:00", // Example timestamp
        },
        {
            title: "UI/UX Designer",
            location: "Remote",
            type: "Part-Time",
            description: "Join our team as a UI/UX Designer and help create beautiful and user-friendly interfaces.",
            image: Img,
            postedDate: "2024-01-28T14:30:00",
        },
        {
            title: "Project Manager",
            location: "Bangalore, India",
            type: "Full-Time",
            description: "Manage projects efficiently, coordinate teams, and ensure timely delivery of software solutions.",
            image: Img,
            postedDate: "2024-01-25T09:15:00",
        },
        {
            title: "Marketing Executive",
            location: "Chennai, India",
            type: "Internship",
            description: "Looking for an energetic Marketing Executive to handle branding, campaigns, and digital marketing.",
            image: Img,
            postedDate: "2024-01-20T16:45:00",
        },
    ];

    // Function to calculate the time since the job was posted
    const timeSincePosted = (dateString) => {
        const postedDate = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - postedDate) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) return `${diffInDays} days ago`;
        return postedDate.toDateString(); // Show full date if older than a week
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="display-5 fw-bold text-dark">Join Our Team</h2>
                <p className="lead text-muted">Explore exciting career opportunities with us.</p>
            </div>

            <div className="p-4 rounded" style={{ backgroundColor: "#f7f7f9" }}> {/* Mild Background Color */}
                <div className="row">
                    {jobListings.map((job, index) => (
                        <div className="col-12 mb-4" key={index}>
                            <div className="card shadow-sm border-0 rounded-3 d-flex flex-row align-items-center p-3">
                                <img src={job.image} alt={job.title} className="rounded-3 me-3" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{job.title}</h5>
                                    <p className="card-text text-muted mb-1"><strong>Location:</strong> {job.location} | <strong>Type:</strong> {job.type}</p>
                                    <p className="card-text text-secondary">{job.description}</p>
                                    <p className="text-muted small">📅 Posted {timeSincePosted(job.postedDate)}</p>
                                    <div className="mt-auto text-end">
                                        <button className="btn contact-btn ">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
