import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For dynamic job ID in URL
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const JobDetails = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch job details dynamically
  useEffect(() => {
    fetch(`https://yourapi.com/jobs/${jobId}`) // Replace with your actual API
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!job) return <div className="text-center mt-5">Job not found</div>;

  return (
    <div className="container mt-5">
      <div className="job-card shadow p-4 bg-white rounded">
        {/* Job Title */}
        <h2 className="job-title text-primary">{job.title}</h2>

        {/* Job Info */}
        <div className="text-muted mb-3">
          <p>
            <strong>Location:</strong> {job.location} | <strong>Type:</strong> {job.type}
          </p>
        </div>

        {/* Job Description */}
        <p className="job-description">{job.description}</p>

        {/* Responsibilities */}
        <h4 className="mt-4">Responsibilities:</h4>
        <ul className="list-group list-group-flush">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>

        {/* Requirements */}
        <h4 className="mt-4">Requirements:</h4>
        <ul className="list-group list-group-flush">
          {job.requirements.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>

        {/* Posted Date */}
        <p className="text-muted mt-3">📅 Posted on {new Date(job.postedDate).toDateString()}</p>

        {/* Apply Button */}
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-3 w-100">
          Apply Now
        </a>

        {/* Share Section */}
        <div className="mt-4">
          <h5>Share this job:</h5>
          <div className="d-flex gap-3">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaFacebook /> Facebook
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="btn btn-info">
              <FaTwitter /> Twitter
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
