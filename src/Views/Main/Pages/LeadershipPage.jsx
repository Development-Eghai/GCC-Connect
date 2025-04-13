import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'Components/footer';

const Leadership = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get('https://api.admin.pixeladvant.com/api/teams/');
                setTeamMembers(response.data.reverse());
                setError(null);
            } catch (err) {
                console.error('Error fetching team:', err);
                setError(err.response
                    ? `Error ${err.response.status}: ${err.response.statusText}`
                    : 'Network error. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    const fetchSingleMember = async (id) => {
        try {
            const response = await axios.get(`https://api.admin.pixeladvant.com/api/teams/${id}/`);
            setSelectedMember(response.data);
        } catch (err) {
            console.error('Failed to fetch member:', err);
        }
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h6 className="display-6 fw-bold">Our Leadership Team</h6>
                    <p className="lead text-muted">Meet the dedicated professionals leading our company to success.</p>
                </div>

                {loading && <p className="text-center">Loading team members...</p>}
                {error && <div className="alert alert-danger text-center">{error}</div>}

                <div className="row gap-5 justify-content-center">
                    {!loading && !error && teamMembers.map((member) => (
                        <div key={member.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <div className="card about-card shadow-sm border-light rounded">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="card-img-top img-fluid rounded-top"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center d-flex flex-column">
                                    <h5 className="card-title fw-bold">{member.name}</h5>
                                    <h6 className="card-subtitle text-muted">{member.position}</h6>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mt-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#readmore"
                                        onClick={() => fetchSingleMember(member.id)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="readmore" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {selectedMember?.name || "Team Member"}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedMember ? (
                                <div className="container">
                                    <div className="text-center mb-4">
                                        <img
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '250px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-4 fw-bold">Name:</div>
                                        <div className="col-8">{selectedMember.name}</div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-4 fw-bold">Position:</div>
                                        <div className="col-8">{selectedMember.position}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 fw-bold">Description:</div>
                                        <div className="col-8">{selectedMember.description || 'No description available.'}</div>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center">Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Leadership;
