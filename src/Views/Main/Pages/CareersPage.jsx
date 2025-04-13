import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://api.admin.pixeladvant.com/api/post_jobs/');
                
                const sortedJobs = [...response.data]
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // newest first
                    .reverse(); // reverse to show oldest first
    
                setJobs(sortedJobs);
                setFilteredJobs(sortedJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
    
        fetchJobs();
    }, []);
    
    

    useEffect(() => {
        const updated = jobs.filter(job => {
            const searchStr = `${job.job_title} ${job.company} ${job.location} ${job.salary} ${job.job_description} ${job.requirements}`.toLowerCase();
            return searchStr.includes(search.toLowerCase());
        });
        setFilteredJobs(updated);
    }, [search, jobs]);

    const handleApply = (job) => {
        const subject = `Application for ${job.job_title} at ${job.company}`;
        const body = `Hello,\n\nI am interested in the ${job.job_title} position at ${job.company}.\n\nRegards,\n[Your Name]`;
        window.location.href = `mailto:hr@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="container my-5">
            <div className="d-flex p-4 justify-content-between align-items-center mb-4">
                <h3 className="fw-bold">Open Positions</h3>
                <div style={{ maxWidth: '300px', position: 'relative' }}>
                    <input
                        type="text"
                        className="form-control pe-5"
                        placeholder="Search jobs..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    {search && (
                        <button
                            className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 border-0 bg-transparent"
                            onClick={() => setSearch('')}
                            style={{ zIndex: 2 }}
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>


            <div className="row mt-3 bg-light p-4">
                {filteredJobs.map(job => (
                    <div key={job.id} className="col-12 mb-3">
                        <div className="p-4 rounded-4 shadow-sm bg-light border">
                            <div className="d-flex justify-content-between align-items-start flex-wrap">
                                <div>
                                    <h5 className="fw-bold text-dark mb-1">{job.job_title}</h5>
                                    <p className="mb-1 text-muted">{job.company} - {job.location}</p>
                                    {/* <p className="mb-1">{job.location} </p> */}
                                    <p className="mb-1"> <strong>₹ {job.salary}</strong></p>
                                    <p className="text-secondary" style={{ maxWidth: '600px' }}>
                                        {job.job_description?.slice(0, 150)}...
                                    </p>
                                </div>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-outline-dark"
                                        data-bs-toggle="modal"
                                        data-bs-target="#jobModal"
                                        onClick={() => setSelectedJob(job)}
                                    >
                                        View Details
                                    </button>
                                    <button className="btn contact-btn  text-white" onClick={() => handleApply(job)}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Job Details Modal */}
            <div className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedJob?.job_title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedJob && (
                                <>
                                    <p><strong>Company:</strong> {selectedJob.company}</p>
                                    <p><strong>Location:</strong> {selectedJob.location}</p>
                                    <p><strong>Salary:</strong> ₹{selectedJob.salary}</p>
                                    <p><strong>Description:</strong> {selectedJob.job_description}</p>
                                    <p><strong>Requirements:</strong> {selectedJob.requirements}</p>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-outline-dark  px-5 p-2" data-bs-dismiss="modal">Close</button>

                            <button className="btn contact-btn px-5 text-white" onClick={() => handleApply(selectedJob)}>
                                Apply
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
